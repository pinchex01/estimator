import * as utils from './utils';

const covid19ImpactEstimator = (data) => {
  const { reportedCases: cases, totalHospitalBeds, region } = data;
  const { avgDailyIncomeInUSD: avgUSD, avgDailyIncomePopulation: avgDailyIncomePpltn } = region;
  const { bestCase: iCurrentlyInfected, worstCase: sCurrentlyInfected } = utils.CalcInfected(cases);
  const iInfections = iCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const sInfections = sCurrentlyInfected * (2 ** utils.CalculateFactor(data));
  const iSevereCasesByRequestedTime = Math.trunc(0.15 * (iInfections));
  const sSevereCasesByRequestedTime = Math.trunc(0.15 * (sInfections));
  const iAvailableBeds = Math.trunc((0.35 * totalHospitalBeds) - iSevereCasesByRequestedTime);
  const sAvailableBeds = Math.trunc((0.35 * totalHospitalBeds) - sSevereCasesByRequestedTime);
  const iCasesForICUByRequestedTime = Math.trunc(0.05 * iInfections);
  const sCasesForICUByRequestedTime = Math.trunc(0.05 * sInfections);
  const iCasesForVentilatorsByRequestedTime = Math.trunc(0.02 * iInfections);
  const sCasesForVentilatorsByRequestedTime = Math.trunc(0.02 * sInfections);
  const iDollars = (iInfections * avgDailyIncomePpltn * avgUSD) / utils.formatDuration(data);
  const sDollars = (sInfections * avgDailyIncomePpltn * avgUSD) / utils.formatDuration(data);

  return {
    data,
    impact: {
      currentlyInfected: iCurrentlyInfected,
      infectionsByRequestedTime: iInfections,
      severeCasesByRequestedTime: iSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: iAvailableBeds,
      casesForICUByRequestedTime: iCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: iCasesForVentilatorsByRequestedTime,
      dollarsInFlight: Math.trunc(iDollars)
    },
    severeImpact: {
      currentlyInfected: sCurrentlyInfected,
      infectionsByRequestedTime: sInfections,
      severeCasesByRequestedTime: sSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: sAvailableBeds,
      casesForICUByRequestedTime: sCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: sCasesForVentilatorsByRequestedTime,
      dollarsInFlight: Math.trunc(sDollars)
    }
  };
};