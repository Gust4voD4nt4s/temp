import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

export interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

const random = () => Math.floor(Math.random() * 1000 + 1000);

const multerMiddleware = {
  
  fileFilter: (req: Request, file: MulterFile, cb: FileFilterCallback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'Arquivo tem que ser PNG ou JPG'));
    }
    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: function (req: Request, file: MulterFile, cb: (error: Error | null, destination: string) => void) {
      const uploadPath = path.resolve(__dirname, '../uploads', 'images');
      cb(null, uploadPath);
    },
    filename: function (req: Request, file: MulterFile, cb: (error: Error | null, filename: string) => void) {
      cb(null, `${Date.now()}_${random()}_${file.originalname}`);
    },
  }),

}

export const upload = multer(multerMiddleware);

