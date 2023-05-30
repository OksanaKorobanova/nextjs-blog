import { NextResponse } from 'next/server';
import { connectDb, insertDoc } from '../../helpers/db-helper';

export async function POST(req) {
  const { email, name, message } = await req.json();
  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim === ''
  ) {
    return new Response(
      { message: 'Invalid data' },
      {
        status: 422,
      }
    );
  }

  const newMsg = {
    email,
    name,
    message,
  };

  let client;

  try {
    client = await connectDb();
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Connection to db failed',
      },
      {
        status: 500,
      }
    );
  }

  try {
    const result = await insertDoc(client, 'contacts', newMsg);
    newMsg.id = result.insertedId;
    return NextResponse.json(
      {
        message: 'Message Sent',
        data: newMsg,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Connection to db failed',
      },
      {
        status: 500,
      }
    );
  } finally {
    client.close();
  }
}
