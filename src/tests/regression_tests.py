import unittest
from app import create_app

class TestRegression(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

    def test_login(self):
        response = self.client.post('/login', data=dict(username='user', password='pass'), follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_profile_creation(self):
        response = self.client.post('/profile', data=dict(name='John Doe', age=30), follow_redirects=True)
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()