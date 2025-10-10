package demo;

/**
 * Car class extending Vehicle and implementing interfaces
 */
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
    
    @Override
    public void start() {
        if (!engineRunning) {
            engineRunning = true;
            System.out.println("Car engine started");
        }
    }
    
    @Override
    public void stop() {
        if (engineRunning && currentSpeed == 0) {
            engineRunning = false;
            System.out.println("Car engine stopped");
        }
    }
    
    @Override
    public void accelerate(double speed) {
        if (engineRunning) {
            currentSpeed += speed;
            System.out.println("Accelerating to " + currentSpeed + " mph");
        }
    }
    
    @Override
    public void brake() {
        if (currentSpeed > 0) {
            currentSpeed -= 10;
            if (currentSpeed < 0) currentSpeed = 0;
            System.out.println("Braking. Current speed: " + currentSpeed + " mph");
        }
    }
    
    @Override
    public void turn(String direction) {
        System.out.println("Turning " + direction);
    }
    
    @Override
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    @Override
    public void performMaintenance() {
        System.out.println("Performing car maintenance");
        mileage = 0;
    }
    
    @Override
    public boolean needsMaintenance() {
        return mileage > 5000;
    }
    
    @Override
    public int getMaintenanceInterval() {
        return 5000;
    }
    
    public int getNumberOfDoors() {
        return numberOfDoors;
    }
    
    public void setNumberOfDoors(int numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }
    
    public String getFuelType() {
        return fuelType;
    }
    
    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }
}
