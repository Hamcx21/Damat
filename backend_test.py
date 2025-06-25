import requests
import unittest
import json
from datetime import datetime

class DAMATAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(DAMATAPITester, self).__init__(*args, **kwargs)
        self.base_url = "https://2e69e1b0-db89-4ac9-807c-26c90e7deef8.preview.emergentagent.com/api"
        self.session = requests.Session()

    def test_01_root_endpoint(self):
        """Test the root API endpoint"""
        print("\n🔍 Testing root endpoint...")
        response = self.session.get(f"{self.base_url}/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["message"], "DAMAT API - Malaysia's First Arithmetic Board Game")
        print("✅ Root endpoint test passed")

    def test_02_status_check(self):
        """Test status check endpoints"""
        print("\n🔍 Testing status check endpoints...")
        
        # Test POST /status
        status_data = {"client_name": "API Tester"}
        response = self.session.post(f"{self.base_url}/status", json=status_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["client_name"], "API Tester")
        self.assertTrue("id" in data)
        print("✅ POST /status test passed")
        
        # Test GET /status
        response = self.session.get(f"{self.base_url}/status")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(isinstance(data, list))
        if len(data) > 0:
            self.assertTrue("client_name" in data[0])
            self.assertTrue("id" in data[0])
        print("✅ GET /status test passed")

    def test_03_contact_form(self):
        """Test contact form submission"""
        print("\n🔍 Testing contact form submission...")
        
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "0123456789",
            "organization": "Test School",
            "message": "This is a test message from the automated API tester.",
            "inquiry_type": "general"
        }
        
        response = self.session.post(f"{self.base_url}/contact", json=contact_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data["success"])
        self.assertTrue("id" in data)
        print("✅ POST /contact test passed")
        
        # Test GET /contact (admin endpoint)
        response = self.session.get(f"{self.base_url}/contact")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(isinstance(data, list))
        if len(data) > 0:
            self.assertTrue("name" in data[0])
            self.assertTrue("email" in data[0])
            self.assertTrue("message" in data[0])
        print("✅ GET /contact test passed")

    def test_04_game_tracker(self):
        """Test game tracker endpoints"""
        print("\n🔍 Testing game tracker endpoints...")
        
        # Test POST /game-tracker
        tracker_data = {
            "school_name": "Test School",
            "state": "Test State",
            "games_played": 10,
            "students_engaged": 25
        }
        
        response = self.session.post(f"{self.base_url}/game-tracker", json=tracker_data)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["school_name"], "Test School")
        self.assertEqual(data["state"], "Test State")
        self.assertEqual(data["games_played"], 10)
        self.assertEqual(data["students_engaged"], 25)
        print("✅ POST /game-tracker test passed")
        
        # Test GET /game-tracker
        response = self.session.get(f"{self.base_url}/game-tracker")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(isinstance(data, list))
        if len(data) > 0:
            self.assertTrue("school_name" in data[0])
            self.assertTrue("games_played" in data[0])
        print("✅ GET /game-tracker test passed")
        
        # Test GET /game-tracker/stats
        response = self.session.get(f"{self.base_url}/game-tracker/stats")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue("total_games_played" in data)
        self.assertTrue("total_students_engaged" in data)
        self.assertTrue("total_schools" in data)
        self.assertTrue("states_reached" in data)
        self.assertTrue("states_list" in data)
        self.assertTrue("last_updated" in data)
        print("✅ GET /game-tracker/stats test passed")

def run_tests():
    """Run all API tests"""
    print("🧪 Starting DAMAT API Tests...")
    
    # Create a test suite
    suite = unittest.TestSuite()
    
    # Add test cases
    suite.addTest(DAMATAPITester('test_01_root_endpoint'))
    suite.addTest(DAMATAPITester('test_02_status_check'))
    suite.addTest(DAMATAPITester('test_03_contact_form'))
    suite.addTest(DAMATAPITester('test_04_game_tracker'))
    
    # Run the tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Print summary
    print(f"\n📊 Test Summary:")
    print(f"✅ Tests passed: {result.testsRun - len(result.errors) - len(result.failures)}/{result.testsRun}")
    if result.failures or result.errors:
        print(f"❌ Tests failed: {len(result.failures) + len(result.errors)}")
    else:
        print("🎉 All tests passed!")
    
    return len(result.failures) + len(result.errors)

if __name__ == "__main__":
    run_tests()