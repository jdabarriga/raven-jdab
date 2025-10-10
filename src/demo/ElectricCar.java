package demo;

/**
 * Electric car class extending Car with battery features
 */
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
    
    @Override
    public void start() {
        if (currentCharge > 0) {
            super.start();
            System.out.println("Electric motor activated silently");
        } else {
            System.out.println("Battery depleted. Please charge.");
        }
    }
    
    @Override
    public void accelerate(double speed) {
        if (currentCharge > 0) {
            super.accelerate(speed);
            currentCharge -= 0.1;
            range = calculateRange();
        }
    }
    
    public void charge(boolean fastCharge) {
        if (fastCharge && fastChargingEnabled) {
            System.out.println("Fast charging...");
            currentCharge = batteryCapacity;
        } else {
            System.out.println("Standard charging...");
            currentCharge = batteryCapacity;
        }
        range = calculateRange();
    }
    
    private int calculateRange() {
        return (int) ((currentCharge / batteryCapacity) * 300);
    }
    
    public double getBatteryPercentage() {
        return (currentCharge / batteryCapacity) * 100;
    }
    
    public double getBatteryCapacity() {
        return batteryCapacity;
    }
    
    public int getRange() {
        return range;
    }
    
    public boolean isFastChargingEnabled() {
        return fastChargingEnabled;
    }
}
