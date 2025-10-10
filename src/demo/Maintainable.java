package demo;

/**
 * Interface for objects that require maintenance
 */
public interface Maintainable {
    void performMaintenance();
    
    boolean needsMaintenance();
    
    int getMaintenanceInterval();
}
