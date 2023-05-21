const OperationResultStatus = {
    Pending: 1,
    Success: 2,
    NotFound: 3,
    Duplicate: 4,
    Rejected: 5,
    UnAuthorized: 6,
    Validation: 7,
    Failed: 8,
    Captcha: 9,
    OverCapacity: 10,
    Expire: 11
};

const LocationType = {
    Country: 1,
    City: 2,
    Town: 3,
    Village: 4,
    Airport: 5,
};
const ProductType = {
    HolidayPackage: 1,
    Hotel: 2,
    Flight: 3,
    // TODO: add the remaining
    // http://docs.santsg.com/tourvisio/enumarations/#product-types
};

export { OperationResultStatus, LocationType, ProductType };