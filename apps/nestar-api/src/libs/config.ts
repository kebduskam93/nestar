import { ObjectId  } from "bson";

export const availableAgentSorts = ['CreatedAt', 'UpdatedAt', 'memberLikes', 'memberViews ', 'memberRank'];
export const availableMemberSorts = ['CreatedAt', 'UpdatedAt', 'memberLikes', 'memberViews '];

 /**  IMAGE CONFIGURATION **/
import { randomUUID } from 'crypto';
import * as path from 'path';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return randomUUID() + ext;
};


export const shapeIntoMongoObjectId = ( target: any) => {
    return typeof target === 'string' ? new ObjectId(target) : target;
};

function uuidv4() {
    throw new Error("Function not implemented.");
}
