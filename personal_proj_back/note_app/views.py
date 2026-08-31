from user_app.views import UserView
from .serializers import NoteSerializer
from rest_framework.response import Response
from rest_framework import status as s


# Create your views here.

class AllNotes(UserView):


    def get(self, request):
        return Response(NoteSerializer(request.user.notes.all(), many=True).data)
        

    def post(self, request):
        data = request.data.copy()
        data['user'] = request.user.id
        ser_note = NoteSerializer(data=data)
        if ser_note.is_valid():
            ser_note.save()
            return Response(ser_note.data, status=s.HTTP_201_CREATED)
        else:
            return Response(ser_note.errors, status=s.HTTP_400_BAD_REQUEST)
        

class ANote(UserView):

    def get(self, request, note_id):
        return Response(NoteSerializer(request.user.notes.get(id=note_id)).data)

    def put(self, request, note_id):
        data = request.data.copy()
        ser_note = NoteSerializer(request.user.notes.get(id=note_id), data=data, partial=True)
        if ser_note.is_valid():
            ser_note.save()
            return Response(ser_note.data)
        else:
            return Response(ser_note.errors, status = s.HTTP_400_BAD_REQUEST)

    def delete(self, request, note_id):
        note = request.user.notes.get(id=note_id)
        return_string = f"{note.title} has been deleted."
        note.delete()
        return Response(return_string)
