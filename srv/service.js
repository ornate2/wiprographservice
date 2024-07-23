const cds = require('@sap/cds');
const cron = require('node-cron');
const JSONFile = require("./data.json")
module.exports = cds.service.impl(async function () {
    this.on('fetchData', fetchData);
    this.on('READ', 'SavingsPOSet', onReadSavingsPOSet)
    this.on('POST', 'SavingsPOSet', onReadSavingsPOSet)

    cds.on('served', () => {
        console.log("Service is served. Scheduling job...");
        scheduleJob();
    });
});

async function fetchData(req) {
    try {
        console.log("Fetching data from OData service...");
        const odataService = await cds.connect.to('WiproOdata');
        const response = await odataService.send({
            method: 'GET',
            path: '/odata/v4/po/SavingsPOSet'
        });
             console.log(response)
        const poData = response;
        console.log("Data fetched successfully:", poData);

        for (const po of poData) {
           
            console.log("Updating SAP with trigger status for PO:", po.PONumber);
            // await updateSAP(po.PONumber, 'Triggered');
        }

        return 'Workflows triggered successfully';
    } catch (error) {
        console.error('Error in fetchData:', error);
        return 'Failed to trigger workflows';
    }
}
async function fetchData(req) {
    try {
        console.log("Fetching data from OData service...");
        const odataService = await cds.connect.to('WiproOdata');
        const response = await odataService.send({
            method: 'POST',
            path: '/SavingsPOSet'
        });
             console.log(response)
        const poData = response;
        console.log("Data fetched successfully:", poData);

        for (const po of poData) {
           
            console.log("Updating SAP with trigger status for PO:", po.PONumber);
            // await updateSAP(po.PONumber, 'Triggered');
        }

        return 'Workflows triggered successfully';
    } catch (error) {
        console.error('Error in fetchData:', error);
        return 'Failed to trigger workflows';
    }
}






async function updateSAP(poNumber, status) {
    console.log("Updating SAP for PO:", poNumber, "with status:", status);
    const odataService = await cds.connect.to('WiproOdata');
    const updateResponse = await odataService.send({
        method: 'PATCH',
        path: `/odata/v4/po/SavingsPOSet(${poNumber})`,
        data: {
            TriggerStatus: status
        }
    });
    return updateResponse;
}


function scheduleJob() {
    cron.schedule('0 0 * * *', async () => {
        console.log('Cron job is running every 20 seconds!');

        try {
            const srv = await cds.connect.to('POService');
            await srv.tx().send('fetchData');
            console.log("success!")
        } catch (error) {
            console.error('Something went wrong. Scheduled task failed:', error);
            throw error;
        }
    });
}

// async function onReadSavingsPOSet(req) {
//     try {
//         console.log("Fetching data from OData service...");
//         const odataService = await cds.connect.to('WiproOdata');
//         const response = await odataService.send({
//             method: 'GET',
//             path: '/ZMM_PO_SAVING_SRV/SavingsPOSet'
//         });

//         console.log("Data fetched successfully:", response);
//         return response;
//     } catch (error) {
//         console.trace('Error in fetchData:', error);
//         return [];
//     }
// }
// edit by aakib
async function onReadSavingsPOSet(req) {
    try {
        console.log("Fetching data from OData service...");
        return JSONFile.SavingsPO;
        // const odataService = await cds.connect.to('WiproOdata');
        // const response = await odataService.send({
        //     method: 'GET',
        //     path: '/ZMM_PO_SAVING_SRV/SavingsPOSet'
        // });

        // console.log("Data fetched successfully:", response);
        //return JSONFile;
    } catch (error) {
        console.trace('Error in fetchData:', error);
        return [];
    }
}


// testing