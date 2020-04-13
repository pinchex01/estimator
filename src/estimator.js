const covid19ImpactEstimator = (data) => data => {
    let estimatedFactor = 10;

    const duration = (period, days) => {
        switch (period) {
          case 'weeks':
            return days * 7;
          case 'months':
            return days * 30;
          default:
            return days;
        }
      };

    const estimator = chain (
        //challenge one
        estimateCurrentlyInfected = (reportedCases) => {
            return reportedCases * estimatedFactor;
          },

        estimateProjectedInfections = () => {
            return reportedCases * 50;
        },

        estimateInfectionssByRequestedTime = () => {
            estimateCurrentlyInfected * 1024;
        },

        //challenge two
        estimatedSevereCases = () => {

        },

        estimateBedSpaceAvailability = () => {

        },

        //challenge three
        estimateCasesForICU = () => {

        },
        estimateCasesForVentilators = () => {

        },
        estimateDollarsInFlight = () => {

        }
    );

    return estimator ({
        data,
        impact: {},
        severImpact: {}
    });
};


export default covid19ImpactEstimator;
