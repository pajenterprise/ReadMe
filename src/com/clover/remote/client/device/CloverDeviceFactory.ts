import {Logger} from '../util/Logger';

/**
 * Clover Device Factory
 *
 * The clover device factory returns new clover devices.
 */
export class CloverDeviceFactory {
    constructor() {
    }

    /**
     * Returns a new clover device based on the configuration
     *
     * @param {CloverDeviceConfiguration} configuration
     * @returns CloverDevice
     */
    static get(configuration) {
        var cloverDevice = configuration.getCloverDeviceType();

        // Try to get the requested clover device.
        var cd = null;
        try {
            cd = new cloverDevice(configuration);
        }
        catch (e) {
            Logger.create().error(e);
        }

        // Return the clover device or null.
        return cd;
    }
}
