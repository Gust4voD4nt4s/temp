"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosProperty = void 0;
const multer_middlewares_1 = require("../middlewares/multer.middlewares");
const images_service_1 = require("../services/images.service");
const photosProperty = (req, res) => {
    const up = multer_middlewares_1.upload.array('files');
    up(req, res, (error) => __awaiter(void 0, void 0, void 0, function* () {
        if (error)
            return res.status(400).json({ errors: error });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const images = req.files;
        const propertyId = req.body.property_id;
        try {
            const newImages = [];
            for (const image of images) {
                const data = {
                    originalname: image.originalname,
                    filename: image.filename,
                    property_id: propertyId
                };
                newImages.push(data);
            }
            yield (0, images_service_1.createImages)(newImages);
            res.status(201).json(newImages);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: error });
        }
    }));
};
exports.photosProperty = photosProperty;
//# sourceMappingURL=photos.controller.js.map