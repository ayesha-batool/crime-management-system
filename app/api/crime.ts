// pages/api/crime.ts

import { NextApiRequest, NextApiResponse } from 'next';

type Crime = {
  id: string;
  title: string;
  description: string;
};

let crimes: Crime[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(crimes);
  }

  if (req.method === 'POST') {
    const { title, description } = req.body;
    const newCrime: Crime = {
      id: new Date().getTime().toString(),
      title,
      description,
    };
    crimes.push(newCrime);
    return res.status(201).json(newCrime);
  }

  if (req.method === 'PUT') {
    const { id, title, description } = req.body;
    const index = crimes.findIndex(crime => crime.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'Crime not found' });
    }
    crimes[index] = { id, title, description };
    return res.status(200).json(crimes[index]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    crimes = crimes.filter(crime => crime.id !== id);
    return res.status(200).json({ message: 'Crime deleted successfully' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
