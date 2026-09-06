from django.test import TestCase, Client
from django.urls import reverse
from rest_framework.test import APITestCase
import json
from rest_framework.authtoken.models import Token


class Test_user_logout(APITestCase):
    def test_003_user_logout(self):
        user = Client()
        sign_up_response = user.post(
            reverse("signup"),
            data={"email": "manga@rules.com", "password": "yugioh"},
            content_type="application/json",
        )

        response_body = json.loads(sign_up_response.content)
        self.user.credentials(HTTP_AUTHORIZATION=f"Token {response_body['token']}")
        response = self.user.post(reverse("logout"))
        with self.subTest():
            tokens = Token.objects.all()
            self.assertEqual(len(tokens), 0)
        self.assertEqual(response.status_code, 204)