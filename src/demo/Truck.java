package demo;

/**
 * Truck class for heavy-duty vehicles
 */
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
    
    @Override
    public void start() {
        engineRunning = true;
        System.out.println("Truck engine started");
    }
    
    @Override
    public void stop() {
        if (currentSpeed == 0) {
            engineRunning = false;
            System.out.println("Truck engine stopped");
        }
    }
    
    @Override
    public void accelerate(double speed) {
        if (engineRunning && !isOverloaded()) {
            currentSpeed += speed * (1 - (currentLoad / cargoCapacity) * 0.5);
        }
    }
    
    @Override
    public void brake() {
        double brakingPower = 8 * (1 + (currentLoad / cargoCapacity));
        currentSpeed -= brakingPower;
        if (currentSpeed < 0) currentSpeed = 0;
    }
    
    @Override
    public void turn(String direction) {
        System.out.println("Truck turning " + direction + " carefully");
    }
    
    @Override
    public double getCurrentSpeed() {
        return currentSpeed;
    }
    
    @Override
    public void performMaintenance() {
        System.out.println("Performing truck maintenance");
        mileage = 0;
    }
    
    @Override
    public boolean needsMaintenance() {
        return mileage > 10000;
    }
    
    @Override
    public int getMaintenanceInterval() {
        return 10000;
    }
    
    public void loadCargo(double weight) {
        if (currentLoad + weight <= cargoCapacity) {
            currentLoad += weight;
            System.out.println("Loaded " + weight + " tons. Current load: " + currentLoad);
        } else {
            System.out.println("Cannot load. Would exceed capacity.");
        }
    }
    
    public void unloadCargo(double weight) {
        if (currentLoad >= weight) {
            currentLoad -= weight;
            System.out.println("Unloaded " + weight + " tons. Current load: " + currentLoad);
        }
    }
    
    public boolean isOverloaded() {
        return currentLoad > cargoCapacity;
    }
    
    public double getCargoCapacity() {
        return cargoCapacity;
    }
    
    public double getCurrentLoad() {
        return currentLoad;
    }
}
