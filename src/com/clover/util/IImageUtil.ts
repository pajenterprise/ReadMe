/**
 * Interface used to abstract implementation details to allow for NodeJS and
 * Browser usage of the library.
 *
 */
export interface IImageUtil {

    /**
     * Returns a base64 encoded string for an image.
     *
     * @param img - an image.
     * @returns {string} a base 64 encoded string of the image.
     */
    getBase64Image(img:any): string;
}
