import connectDB from '@/database/connectDB';
import { NextResponse } from 'next/server';
import { TripModel } from '@/models/Trip';
import type { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req: Request, res: Response) => {
  await connectDB();
  try {
    const body = await req.json();
    const newTrip = await TripModel.create(body);
    //console.log(newTrip);
    return NextResponse.json(
      {
        data: newTrip,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle error
    console.log(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const GET = async () => {
  await connectDB();
  try {
    const trips = await TripModel.find({});
    return NextResponse.json({ data: trips }, { status: 200 });
  } catch (error) {
    // Handle error
    console.log(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
