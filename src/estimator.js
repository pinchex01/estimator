const covid19ImpactEstimator = (data)  => {

    currentlyInfected = (reportedCases) => {
        return reportedCases * 10;
    }

    severeImpacted = (reportedCases) => {
        return reportedCases * 50;
    }
    
    infectionsByRequestedTime = () => {
        currentlyInfected * 1024;
    }
    // const estimator = chain (
    //     //challenge one
    //     estimateCurrentlyInfected,
    //     estimateProjectedInfections,

    //     //challenge two
    //     estimatedSevereCases,
    //     estimateBedSpaceAvailability,

    //     //challenge three
    //     estimateCasesForICU,
    //     estimateCasesForVentilators,
    //     estimateDollarsInFlight
    // );

    return estimator ({
        data,
        impact: {},
        severImpact: {}
    });
};


export default covid19ImpactEstimator;
