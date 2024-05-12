import { Schema, model, Document } from 'ottoman';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    dob?: Date;
    phone?: string;
    address?: string;
    monthlyIncome?: number;
    spouse?: string;
    created: Date;
}

const UserSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        min: 3,
        max: 255
    },
    email: { 
        type: String, 
        required: true,
        max: 255
    },
    password: { 
        type: String, 
        required: true,
        max: 1024, //store hashes
        min: 6
    },
    dob: { 
        type: Date 
    },
    phone: { 
        type: String 
    },
    address: { 
        type: String 
    },
    monthlyIncome: { 
        type: Number 
    },
    spouse: { 
        type: String 
    },
    created: { 
        type: Date, 
        default: Date.now()
    }
})

const User = model<IUser>('User', UserSchema);
export default User;