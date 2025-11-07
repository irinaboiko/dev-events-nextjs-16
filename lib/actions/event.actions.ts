"use server";

import connectDB from "@/lib/mongodb";
import { Event } from "@/database";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();

    const event = await Event.findOne({ slug });

    // TODO: add lean() method to the return statement - ???
    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    });
  } catch {
    return [];
  }
};
