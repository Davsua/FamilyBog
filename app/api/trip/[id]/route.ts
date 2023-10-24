import connectDB from '@/database/connectDB';
import { TripModel } from '@/models/Trip';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (req: any, { params }: any) => {
  console.log(params);
  const { id } = params;
  await connectDB();
  try {
    const trip = await TripModel.findById(id);
    return NextResponse.json({ data: trip }, { status: 200 });
  } catch (error) {
    // Handle error
    console.log(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const DELETE = async (req: Request, { params }: any) => {
  await connectDB();
  const id = params.id;
  //console.log(params);
  try {
    const trip = await TripModel.findByIdAndDelete(id);
    //console.log('aqui');
    if (!trip) {
      return NextResponse.json({ message: `Document with ID: ${id} not founded` }, { status: 404 });
    }
    return NextResponse.json({ data: trip }, { status: 200 });
  } catch (error) {
    // Handle error
    //console.log(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const PUT = async (req: Request, { params }: any) => {
  await connectDB();
  const id = params.id;
  const body = await req.json();
  //console.log(params);
  try {
    const trip = await TripModel.findByIdAndUpdate(id, { $set: { ...body } }, { new: true });
    //console.log('aqui');
    if (!trip) {
      return NextResponse.json({ message: `Document with ID: ${id} not founded` }, { status: 404 });
    }
    return NextResponse.json({ data: trip }, { status: 200 });
  } catch (error) {
    // Handle error
    //console.log(error);
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
