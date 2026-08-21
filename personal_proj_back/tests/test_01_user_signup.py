from django.test import TestCase, Client
from django.urls import reverse

class Test_user_sign_up(TestCase):
    def test_001_user_sign_up(self):
        user = Client()
        response = user.post(
            reverse("signup"),
            data = {"email":"je@je.com", "password":"je"},
            content_type = "application/json",
        )

        with self.subTest():
            self.assertEqual(response.status_code, 201)
        self.assertTrue(
            b'{"user":"je@je.com"' in response.content
            and b"token" in response.content
        )