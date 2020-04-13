const covid19ImpactEstimator = (data) => data => {
    
    const estimator = chain (
        //challenge one
        estimateCurrentlyInfected,
        estimateProjectedInfections,

        //challenge two
        estimatedSevereCases,
        estimateBedSpaceAvailability,

        //challenge three
        estimateCasesForICU,
        estimateCasesForVentilators,
        estimateDollarsInFlight
    );

    return estimator ({
        data,
        impact: {},
        severImpact: {}
    });
};


export default covid19ImpactEstimator;
