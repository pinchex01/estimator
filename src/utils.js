const formatWeeksToDays = (duration) => duration * 7;

const formatMonthsToWeeks = (duration) => duration * 4;

const formatMonthsToDays = (duration) => formatWeeksToDays(formatMonthsToWeeks(duration));

const formatDuration = (data) => {
  console.log(data);
  const { periodType, timeToElapse } = data;

  switch (periodType) {
    case 'days': {
      return timeToElapse;
    }

    case 'weeks': {
      return formatWeeksToDays(timeToElapse);
    }

    case 'months': {
      const estimatedExtraDays = 2 * timeToElapse;
      return formatMonthsToDays(timeToElapse) + estimatedExtraDays;
    }
    default: {
      return timeToElapse;
    }
  }
};

const CalculateFactor = (data) => {
  const days = formatDuration(data);
  return Math.floor(days / 3);
};

const CalcInfected = (cases) => {
  const bestCase = cases * 10;
  const worstCase = cases * 50;

  return {
    bestCase,
    worstCase
  };
};

export { formatDuration, CalculateFactor, CalcInfected };
