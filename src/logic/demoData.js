/**
 * Demo data showcasing all features of Raven
 * This demonstrates:
 * - Abstract classes (Vehicle)
 * - Interfaces (Drivable, Maintainable)
 * - Inheritance (Car extends Vehicle, ElectricCar extends Car)
 * - Multiple interface implementation
 * - Public/private/protected modifiers
 * - Static members
 * - Various method types
 */

// Demo files are embedded as strings to avoid build configuration complexity
export const getDemoFiles = async () => {
  // Use embedded code directly instead of trying to fetch
  const files = [
    {
      path: 'Vehicle.java',
      content: getVehicleCode()
    },
    {
      path: 'Drivable.java',
      content: getDrivableCode()
    },
    {
      path: 'Maintainable.java',
      content: getMaintainableCode()
    },
    {
      path: 'Car.java',
      content: getCarCode()
    },
    {
      path: 'Motorcycle.java',
      content: getMotorcycleCode()
    },
    {
      path: 'ElectricCar.java',
      content: getElectricCarCode()
    },
    {
      path: 'Truck.java',
      content: getTruckCode()
    }
  ];
  
  return files;
};

// Fallback: Embedded demo code as strings
const getVehicleCode = () => `package com.example.demo;

public abstract class Vehicle {
    private String brand;
    private String model;
    private int year;
    protected double price;
    private static int totalVehicles = 0;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        totalVehicles++;
    }
    
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    public String getModel() { return model; }
    public void setModel(String model) { this.model = model; }
    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public static int getTotalVehicles() { return totalVehicles; }
    
    public abstract void start();
    public abstract void stop();
    
    public String getInfo() {
        return year + " " + brand + " " + model;
    }
}`;

const getDrivableCode = () => `package com.example.demo;

public interface Drivable {
    void accelerate(double speed);
    void brake();
    void turn(String direction);
    double getCurrentSpeed();
}`;

const getMaintainableCode = () => `package com.example.demo;

public interface Maintainable {
    void performMaintenance();
    boolean needsMaintenance();
    int getMaintenanceInterval();
}`;

const getCarCode = () => `package com.example.demo;

public class Car extends Vehicle implements Drivable, Maintainable {
    private int numberOfDoors;
    private String fuelType;
    private double currentSpeed;
    private int mileage;
    private boolean engineRunning;
    
    public Car(String brand, String model, int year, int numberOfDoors, String fuelType) {
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
        this.currentSpeed = 0.0;
        this.mileage = 0;
        this.engineRunning = false;
    }
    
    public void start() {
        if (!engineRunning) {
            engineRunning = true;
        }
    }
    
    public void stop() {
        if (engineRunning && currentSpeed == 0) {
            engineRunning = false;
        }
    }
    
    public void accelerate(double speed) {
        if (engineRunning) {
            currentSpeed += speed;
        }
    }
    
    public void brake() {
        if (currentSpeed > 0) {
            currentSpeed -= 10;
            if (currentSpeed < 0) currentSpeed = 0;
        }
    }
    
    public void turn(String direction) {
        System.out.println("Turning " + direction);
    }
    
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    public void performMaintenance() {
        mileage = 0;
    }
    
    public boolean needsMaintenance() {
        return mileage > 5000;
    }
    
    public int getMaintenanceInterval() {
        return 5000;
    }
    
    public int getNumberOfDoors() { return numberOfDoors; }
    public void setNumberOfDoors(int numberOfDoors) { this.numberOfDoors = numberOfDoors; }
    public String getFuelType() { return fuelType; }
    public void setFuelType(String fuelType) { this.fuelType = fuelType; }
}`;

const getMotorcycleCode = () => `package com.example.demo;

public class Motorcycle extends Vehicle implements Drivable {
    private boolean hasSidecar;
    private String motorcycleType;
    private double currentSpeed;
    private boolean engineRunning;
    
    public Motorcycle(String brand, String model, int year, String motorcycleType) {
        super(brand, model, year);
        this.motorcycleType = motorcycleType;
        this.hasSidecar = false;
        this.currentSpeed = 0.0;
        this.engineRunning = false;
    }
    
    public void start() {
        engineRunning = true;
    }
    
    public void stop() {
        if (currentSpeed == 0) {
            engineRunning = false;
        }
    }
    
    public void accelerate(double speed) {
        if (engineRunning) {
            currentSpeed += speed;
        }
    }
    
    public void brake() {
        if (currentSpeed > 0) {
            currentSpeed -= 15;
            if (currentSpeed < 0) currentSpeed = 0;
        }
    }
    
    public void turn(String direction) {
        System.out.println("Leaning " + direction);
    }
    
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    public void wheelie() {
        if (currentSpeed > 20) {
            System.out.println("Performing a wheelie!");
        }
    }
    
    public boolean isHasSidecar() { return hasSidecar; }
    public void setHasSidecar(boolean hasSidecar) { this.hasSidecar = hasSidecar; }
}`;

const getElectricCarCode = () => `package com.example.demo;

public class ElectricCar extends Car {
    private double batteryCapacity;
    private double currentCharge;
    private int range;
    private boolean fastChargingEnabled;
    
    public ElectricCar(String brand, String model, int year, int numberOfDoors, double batteryCapacity) {
        super(brand, model, year, numberOfDoors, "Electric");
        this.batteryCapacity = batteryCapacity;
        this.currentCharge = batteryCapacity;
        this.range = calculateRange();
        this.fastChargingEnabled = true;
    }
    
    public void start() {
        if (currentCharge > 0) {
            super.start();
        }
    }
    
    public void accelerate(double speed) {
        if (currentCharge > 0) {
            super.accelerate(speed);
            currentCharge -= 0.1;
            range = calculateRange();
        }
    }
    
    public void charge(boolean fastCharge) {
        currentCharge = batteryCapacity;
        range = calculateRange();
    }
    
    private int calculateRange() {
        return (int) ((currentCharge / batteryCapacity) * 300);
    }
    
    public double getBatteryPercentage() {
        return (currentCharge / batteryCapacity) * 100;
    }
    
    public double getBatteryCapacity() { return batteryCapacity; }
    public int getRange() { return range; }
    public boolean isFastChargingEnabled() { return fastChargingEnabled; }
}`;

const getTruckCode = () => `package com.example.demo;

public class Truck extends Vehicle implements Drivable, Maintainable {
    private double cargoCapacity;
    private double currentLoad;
    private int numberOfAxles;
    private double currentSpeed;
    private boolean engineRunning;
    private int mileage;
    
    public Truck(String brand, String model, int year, double cargoCapacity, int numberOfAxles) {
        super(brand, model, year);
        this.cargoCapacity = cargoCapacity;
        this.numberOfAxles = numberOfAxles;
        this.currentLoad = 0.0;
        this.currentSpeed = 0.0;
        this.engineRunning = false;
        this.mileage = 0;
    }
    
    public void start() {
        engineRunning = true;
    }
    
    public void stop() {
        if (currentSpeed == 0) {
            engineRunning = false;
        }
    }
    
    public void accelerate(double speed) {
        if (engineRunning && !isOverloaded()) {
            currentSpeed += speed * (1 - (currentLoad / cargoCapacity) * 0.5);
        }
    }
    
    public void brake() {
        double brakingPower = 8 * (1 + (currentLoad / cargoCapacity));
        currentSpeed -= brakingPower;
        if (currentSpeed < 0) currentSpeed = 0;
    }
    
    public void turn(String direction) {
        System.out.println("Truck turning " + direction);
    }
    
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    public void performMaintenance() {
        mileage = 0;
    }
    
    public boolean needsMaintenance() {
        return mileage > 10000;
    }
    
    public int getMaintenanceInterval() {
        return 10000;
    }
    
    public void loadCargo(double weight) {
        if (currentLoad + weight <= cargoCapacity) {
            currentLoad += weight;
        }
    }
    
    public void unloadCargo(double weight) {
        if (currentLoad >= weight) {
            currentLoad -= weight;
        }
    }
    
    public boolean isOverloaded() {
        return currentLoad > cargoCapacity;
    }
    
    public double getCargoCapacity() { return cargoCapacity; }
    public double getCurrentLoad() { return currentLoad; }
}`;

export const getDemoDescription = () => {
  return {
    title: "Vehicle Management System Demo",
    description: "This demo showcases a complete object-oriented vehicle management system with:",
    features: [
      "Abstract base class (Vehicle) with common properties and methods",
      "Two interfaces (Drivable, Maintainable) for different capabilities",
      "Inheritance hierarchy: Car → ElectricCar, showing multi-level inheritance",
      "Multiple interface implementation (Car implements both Drivable and Maintainable)",
      "Various access modifiers (public, private, protected)",
      "Static members for tracking total vehicles",
      "Abstract methods requiring implementation in subclasses"
    ],
    classHierarchy: {
      "Vehicle (abstract)": {
        children: ["Car", "Motorcycle", "Truck"],
        description: "Base class with common vehicle properties"
      },
      "Car": {
        children: ["ElectricCar"],
        implements: ["Drivable", "Maintainable"],
        description: "Standard car implementation"
      },
      "ElectricCar": {
        extends: "Car",
        description: "Electric vehicle with battery management"
      },
      "Motorcycle": {
        extends: "Vehicle",
        implements: ["Drivable"],
        description: "Two-wheeled vehicle"
      },
      "Truck": {
        extends: "Vehicle",
        implements: ["Drivable", "Maintainable"],
        description: "Heavy-duty cargo vehicle"
      }
    }
  };
};
