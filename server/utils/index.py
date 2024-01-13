import requests
import json

url = "http://localhost:5000/api/v1/add-product"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTk4NGJkZjM4ODlhN2Y4YzE0YjVjY2IiLCJlbWFpbCI6InJhaXNvbkAxLmNvbSIsImlhdCI6MTcwNDQ3OTczOCwiZXhwIjoxNzA0NTY2MTM4fQ.xcxHXOQnenBgxWyiuA7V5qw5YW3xhKexK_MdREOLeNY"
}

data = [
  {
    "data": {
      "title": "Gaming Laptop",
      "description": "High-performance gaming laptop for immersive gaming experience.",
      "size": 15,
      "color": "RGB",
      "features": ["NVIDIA RTX Graphics", "144Hz Display"],
      "warranty": 2,
      "soldOut": 0,
      "price": 1500,
      "category": "Computers",
      "imageUrls": ["gaming_laptop_url1", "gaming_laptop_url2"],
      "seller": "GameMasters",
      "tags": ["Gaming", "Technology"],
      "stock": 15,
      "productInfo": {
        "brand": "Alienware",
        "processor": "Intel Core i7"
      }
    }
  },
  {
    "data": {
      "title": "Yoga Mat",
      "description": "Eco-friendly yoga mat for comfortable workouts.",
      "size": None,
      "color": "Green",
      "features": ["Non-slip Surface", "Extra Thick"],
      "warranty": None,
      "soldOut": 0,
      "price": 30,
      "category": "Fitness",
      "imageUrls": ["yoga_mat_url1", "yoga_mat_url2"],
      "seller": "ZenFitness",
      "tags": ["Yoga", "Wellness"],
      "stock": 50,
      "productInfo": {
        "brand": "Liforme",
        "material": "Natural Rubber"
      }
    }
  },
  {
    "data": {
      "title": "Robot Vacuum Cleaner",
      "description": "Smart robot vacuum for hands-free cleaning.",
      "size": None,
      "color": "White",
      "features": ["App Control", "Mapping Technology"],
      "warranty": 1,
      "soldOut": 0,
      "price": 250,
      "category": "Home Appliances",
      "imageUrls": ["robot_vacuum_url1", "robot_vacuum_url2"],
      "seller": "SmartLiving",
      "tags": ["Smart Home", "Cleaning"],
      "stock": 20,
      "productInfo": {
        "brand": "iRobot",
        "batteryLife": "Up to 90 minutes"
      }
    }
  },
  {
    "data": {
      "title": "Portable Bluetooth Speaker",
      "description": "Compact Bluetooth speaker for on-the-go music.",
      "size": None,
      "color": "Red",
      "features": ["Wireless Streaming", "Water-resistant"],
      "warranty": 1,
      "soldOut": 0,
      "price": 50,
      "category": "Audio",
      "imageUrls": ["bluetooth_speaker_url1", "bluetooth_speaker_url2"],
      "seller": "SoundWave",
      "tags": ["Music", "Portable"],
      "stock": 40,
      "productInfo": {
        "brand": "JBL",
        "connectivity": "Bluetooth 5.0"
      }
    }
  },
  {
    "data": {
      "title": "Office Chair",
      "description": "Ergonomic office chair for comfortable workspace.",
      "size": None,
      "color": "Black",
      "features": ["Adjustable Lumbar Support", "Swivel"],
      "warranty": 2,
      "soldOut": 0,
      "price": 120,
      "category": "Furniture",
      "imageUrls": ["office_chair_url1", "office_chair_url2"],
      "seller": "ErgoComfort",
      "tags": ["Office", "Workplace"],
      "stock": 25,
      "productInfo": {
        "brand": "Steelcase",
        "material": "Mesh Fabric"
      }
    }
  },
  {
    "data": {
      "title": "Smart Thermostat",
      "description": "Energy-efficient smart thermostat for home climate control.",
      "size": None,
      "color": "Silver",
      "features": ["Remote Control", "Energy Savings"],
      "warranty": 2,
      "soldOut": 0,
      "price": 100,
      "category": "Smart Home",
      "imageUrls": ["thermostat_url1", "thermostat_url2"],
      "seller": "EcoSmart",
      "tags": ["Home Automation", "Climate"],
      "stock": 30,
      "productInfo": {
        "brand": "Nest",
        "compatibleSystems": "iOS, Android"
      }
    }
  },
  {
    "data": {
      "title": "Coffee Maker",
      "description": "Modern coffee maker for brewing your favorite coffee.",
      "size": None,
      "color": "Stainless Steel",
      "features": ["Programmable", "Multiple Brew Sizes"],
      "warranty": 1,
      "soldOut": 0,
      "price": 80,
      "category": "Kitchen Appliances",
      "imageUrls": ["coffee_maker_url1", "coffee_maker_url2"],
      "seller": "BrewMaster",
      "tags": ["Coffee", "Appliances"],
      "stock": 35,
      "productInfo": {
        "brand": "Keurig",
        "brewingTechnology": "K-Cup Pods"
      }
    }
  },
  {
    "data": {
      "title": "Digital Drawing Tablet",
      "description": "Versatile digital drawing tablet for artists and designers.",
      "size": None,
      "color": "White",
      "features": ["Pressure Sensitivity", "Wireless Connectivity"],
      "warranty": 1,
      "soldOut": 0,
      "price": 200,
      "category": "Art Supplies",
      "imageUrls": ["drawing_tablet_url1", "drawing_tablet_url2"],
      "seller": "ArtisticGear",
      "tags": ["Art", "Creativity"],
      "stock": 20,
      "productInfo": {
        "brand": "Wacom",
        "activeAreaSize": "Medium"
      }
    }
  },
  {
    "data": {
      "title": "Outdoor Camping Tent",
      "description": "Durable camping tent for outdoor adventures.",
      "size": "4-Person",
      "color": "Green",
      "features": ["Weather-resistant", "Easy Setup"],
      "warranty": 1,
      "soldOut": 0,
      "price": 150,
      "category": "Outdoor Gear",
      "imageUrls": ["camping_tent_url1", "camping_tent_url2"],
      "seller": "AdventureGear",
      "tags": ["Camping", "Outdoors"],
      "stock": 15,
      "productInfo": {
        "brand": "REI Co-op",
        "seasonRating": "3-Season"
      }
    }
  },
  {
    "data": {
      "title": "Portable External Hard Drive",
      "description": "High-capacity external hard drive for data storage.",
      "size": "2TB",
      "color": "Black",
      "features": ["USB 3.0", "Compact Design"],
      "warranty": 2,
      "soldOut": 0,
      "price": 80,
      "category": "Computers",
      "imageUrls": ["external_hard_drive_url1", "external_hard_drive_url2"],
      "seller": "TechStorage",
      "tags": ["Storage", "Backup"],
      "stock": 25,
      "productInfo": {
        "brand": "Seagate",
        "compatibility": "Windows, Mac"
      }
    }
  },
  {
    "data": {
      "title": "Air Purifier",
      "description": "Efficient air purifier for a healthier indoor environment.",
      "size": None,
      "color": "White",
      "features": ["HEPA Filter", "Quiet Operation"],
      "warranty": 3,
      "soldOut": 0,
      "price": 120,
      "category": "Home Appliances",
      "imageUrls": ["air_purifier_url1", "air_purifier_url2"],
      "seller": "CleanLiving",
      "tags": ["Health", "Air Quality"],
      "stock": 30,
      "productInfo": {
        "brand": "Dyson",
        "coverageArea": "300 sq. ft."
      }
    }
  },
  {
    "data": {
      "title": "Power Bank",
      "description": "Portable power bank for charging devices on the go.",
      "size": "10000mAh",
      "color": "Blue",
      "features": ["Fast Charging", "Compact Size"],
      "warranty": 1,
      "soldOut": 0,
      "price": 25,
      "category": "Mobile Accessories",
      "imageUrls": ["power_bank_url1", "power_bank_url2"],
      "seller": "ChargeMate",
      "tags": ["Tech", "Travel"],
      "stock": 50,
      "productInfo": {
        "brand": "Anker",
        "outputPorts": "2"
      }
    }
  },
  {
    "data": {
      "title": "Electric Scooter",
      "description": "Foldable electric scooter for urban commuting.",
      "size": None,
      "color": "Gray",
      "features": ["Lightweight", "Long Battery Life"],
      "warranty": 1,
      "soldOut": 0,
      "price": 300,
      "category": "Outdoor Gear",
      "imageUrls": ["scooter_url1", "scooter_url2"],
      "seller": "EcoRide",
      "tags": ["Commute", "Green Living"],
      "stock": 20,
      "productInfo": {
        "brand": "Xiaomi",
        "maxSpeed": "15.5 mph"
      }
    }
  },
  {
    "data": {
      "title": "Security Camera System",
      "description": "Complete security camera system for home surveillance.",
      "size": None,
      "color": "Black",
      "features": ["1080p HD", "Night Vision"],
      "warranty": 2,
      "soldOut": 0,
      "price": 250,
      "category": "Smart Home",
      "imageUrls": ["security_camera_url1", "security_camera_url2"],
      "seller": "SecureHome",
      "tags": ["Security", "Surveillance"],
      "stock": 15,
      "productInfo": {
        "brand": "Ring",
        "cameraType": "Wireless"
      }
    }
  },
  {
    "data": {
      "title": "Blender",
      "description": "Powerful blender for smoothies and food preparation.",
      "size": None,
      "color": "Silver",
      "features": ["Variable Speeds", "Durable Blades"],
      "warranty": 1,
      "soldOut": 0,
      "price": 70,
      "category": "Kitchen Appliances",
      "imageUrls": ["blender_url1", "blender_url2"],
      "seller": "BlendMaster",
      "tags": ["Kitchen", "Cooking"],
      "stock": 35,
      "productInfo": {
        "brand": "Vitamix",
        "jarMaterial": "BPA-free plastic"
      }
    }
  },
  {
    "data": {
      "title": "Dumbbell Set",
      "description": "Versatile dumbbell set for home workouts.",
      "size": None,
      "color": "Black",
      "features": ["Adjustable Weight", "Non-slip Grip"],
      "warranty": None,
      "soldOut": 0,
      "price": 50,
      "category": "Fitness",
      "imageUrls": ["dumbbell_url1", "dumbbell_url2"],
      "seller": "FitZone",
      "tags": ["Fitness", "Strength"],
      "stock": 30,
      "productInfo": {
        "brand": "Bowflex",
        "weightRange": "5-25 lbs"
      }
    }
  },
  {
    "data": {
      "title": "Cordless Vacuum Cleaner",
      "description": "Convenient cordless vacuum for hassle-free cleaning.",
      "size": None,
      "color": "Blue",
      "features": ["Cyclone Technology", "HEPA Filtration"],
      "warranty": 2,
      "soldOut": 0,
      "price": 120,
      "category": "Home Appliances",
      "imageUrls": ["vacuum_cleaner_url1", "vacuum_cleaner_url2"],
      "seller": "CleanMaster",
      "tags": ["Cleaning", "Home"],
      "stock": 25,
      "productInfo": {
        "brand": "Dyson",
        "dustBinCapacity": "0.6L"
      }
    }
  },
  {
    "data": {
      "title": "Solar Power Bank",
      "description": "Solar-powered power bank for eco-friendly charging.",
      "size": "15000mAh",
      "color": "Green",
      "features": ["Solar Charging", "Water-resistant"],
      "warranty": 1,
      "soldOut": 0,
      "price": 40,
      "category": "Mobile Accessories",
      "imageUrls": ["solar_power_bank_url1", "solar_power_bank_url2"],
      "seller": "EcoCharge",
      "tags": ["Tech", "Sustainability"],
      "stock": 40,
      "productInfo": {
        "brand": "RAVPower",
        "outputPorts": "3"
      }
    }
  }
]


# with open("demo.json", "r") as file:
#     products = json.load(file)

for product in data:
    data = product["data"]
    
    response = requests.post(url, headers=headers, json=product)

    if response.status_code == 201:
        print(f"Product '{data['title']}' created successfully!")
        print(response.json(),"\n")
    else:
        print(f"Failed to create Product '{data['title']}'. Status code: {response.status_code}")
        print(response.text,"\n")
