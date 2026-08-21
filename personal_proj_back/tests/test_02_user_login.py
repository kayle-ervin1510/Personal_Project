from django.test import TestCase, Client
from django.urls import reverse

class Test_user_login_up(TestCase):
    def test_002_user_login_up(self):
        user = Client()
        user.post(
            reverse("signup"),
            data = {"email":"je@je.com", "password": "je"},
            content_type = "application/json",
        )
        response = user.post(
            reverse("login"),
            data={"email": "je@je.com", "password":"je"},
            content_type="application/json",
        )

        with self.subTest():
            self.assertEqual(response.status_code, 200)
        self.assertTrue(
            b'"user":"je@je.com"' in response.content and b"token" in response.content
        )