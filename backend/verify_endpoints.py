import requests
import uuid

BASE_URL = "http://localhost:8000/api"

def test_contact():
    print("Testing /api/contact...")
    data = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "1234567890",
        "subject": "Test Subject",
        "message": "Test Message"
    }
    try:
        response = requests.post(f"{BASE_URL}/contact", json=data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_service_request():
    print("\nTesting /api/service-request...")
    data = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "1234567890",
        "service": "cnc-service",
        "message": "Test Service Request"
    }
    try:
        response = requests.post(f"{BASE_URL}/service-request", json=data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    print("Starting verification...")
    contact_ok = test_contact()
    service_ok = test_service_request()
    
    if contact_ok and service_ok:
        print("\nAll tests passed!")
    else:
        print("\nSome tests failed.")
