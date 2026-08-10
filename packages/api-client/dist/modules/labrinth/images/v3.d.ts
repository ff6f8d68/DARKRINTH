import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle } from '../../../types/upload';
import { Labrinth } from '../types';
export declare class LabrinthImagesV3Module extends AbstractModule {
    getModuleID(): string;
    uploadImage(file: File | Blob, ext: Labrinth.Images.v3.ImageExtension, target: Labrinth.Images.v3.UploadImageParams): UploadHandle<Labrinth.Images.v3.UploadedImage>;
}
