import { Request, Response } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { createImages, IImages } from "../services/images.service";

export const photosProperty = (req: Request, res: Response) => {
    const up = upload.array('files');

    up(req, res, async (error) => {
        if (error) return res.status(400).json({ errors: error });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const images: any = req.files
        const propertyId = req.body.property_id
        try {
            const newImages: IImages[] = []

            for (const image of images) {
                const data: IImages = {
                    originalname: image.originalname,
                    filename: image.filename,
                    property_id: propertyId
                }

                newImages.push(data)
            }

            await createImages(newImages)
            
            res.status(201).json(newImages)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error });
        }

    });
};