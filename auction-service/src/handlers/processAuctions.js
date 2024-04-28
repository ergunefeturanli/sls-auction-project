import createError from "http-errors";
import { closeAuction } from "../lib/closeAuction";
import { getEndedFunctions } from "../lib/getEndedAuctions";

async function processAuctions(event, context) {
  try {
    const auctionsToClose = await getEndedFunctions();

    const closePromises = auctionsToClose.map((auction) =>
      closeAuction(auction)
    );
    await Promise.all(closePromises);

    return { closed: closePromises.length };
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
}

export const handler = processAuctions;

// Invoke the function from CLI
// sls invoke -f processAuctions -l
