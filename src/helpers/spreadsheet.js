import config from "../config";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load (callback)
{
    window.gapi.client.load("sheets", "v4", () =>
    {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Sheet1!A1:E50"
            })
            .then(
                response =>
                {
                    const data = response.result.values;
                    // console.log('data = ', data);
                    const milestones = data.slice(1).map((milestone, index) => ({
                        id: index,
                        title: milestone[0],
                        description: milestone[1],
                        time: milestone[2],
                        project: milestone[3],
                        enabled: (milestone[4] === 'TRUE')
                    })) || [];
                    console.log('milestones = ', milestones);
                    callback(
                        { milestones }
                    );
                },
                response =>
                {
                    callback(false, response.result.error);
                }
            );
    });
}
