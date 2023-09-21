// a and b are javascript Date objects
export const dateDiffInDays = (a, b) => {
    const difference = (new Date(b) - new Date(a)) / 60000; //difference in mins.

    let result = 'NAN';

    if (difference < 60)

        result = { desc:`mins`, amount: Math.round(difference) };

    if (difference > 60 && difference <= 1440)
        result = { desc:`hours`, amount: Math.floor(difference / 60) };

    if (difference > 1440 && difference < 2880)
        result = { desc:`day`, amount: Math.round(difference / 1440) };

    if (difference > 2880)
        result = { desc:`days`, amount: Math.round(difference / 1440) };

    return result;
}

export const getTimeDifference = (time) => {
    // console.log({time})
    const difference = Math.round(( new Date(time) - new Date()) / 60000); //difference in mins.
    return difference;

}