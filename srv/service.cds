service POService {
    function fetchData() returns String;

    // @cds.persistence.exists
    entity SavingsPO {
        CreateSaving: String;
        Cluster: String;
        Category: String;
        ProjectDes: String;
        LastYearPOCurr: String;
        Remarks: String;
        Region: String;
        Attachments: String;
        LastYearPONo: String;
        LastYearPOValue: String;
        Attachment: String;
        QuatedValue: String;
        Currency: String;
        OrderValue: String;
        Savings: String;
        SavingsPer: String;
        Approver: String;
        Reject: String;
        SavingType: String;
        BFMValidation: String;
        SavingsDistribution: Boolean;
        YOYSavingFunction: String;
        PONumber: String;
        Buyer: String;
        PODate: String;
        POValue: String;
        POCurrency: String;
        Vendor: String;
        StartDate: String;
        EndDate: String;
        VendorName: String;
        TriggerStatus: String;
    }

    entity SavingsPOSet as projection on SavingsPO;
}