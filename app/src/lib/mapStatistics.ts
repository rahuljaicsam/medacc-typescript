import type { SalaryData } from '@/data/types';

export interface MapStatistics {
  name: string;
  average_salary: { sum: 0; min: number; max: number; count: 0 };
  toxicity: { sum: 0; count: 0 };
  work_hecticity: { sum: 0; count: 0 };
  outsider_harassment: { sum: 0; count: 0 };
  entrance_coaching_feasibility: { sum: 0; count: 0 };
  quality_of_life: { sum: 0; count: 0 };
  preparation_to_go_abroad: { sum: 0; count: 0 };
  patient_density: { sum: 0; count: 0 };
  doctor_density: { sum: 0; count: 0 };
  job_vacancy_density: { sum: 0; count: 0 };
  pharma_rep_density: { sum: 0; count: 0 };
  schooling_for_kids: { sum: 0; count: 0 };
  internet: { sum: 0; count: 0 };
  cost: { sum: 0; count: 0 };
}

export function calculateMapStatistics(data: SalaryData[]): MapStatistics {
  const metrics: MapStatistics = {
    name: data.length > 0 ? (data[0].hospital || 'Unknown') : '-',
    average_salary: { sum: 0, min: Infinity, max: -Infinity, count: 0 },
    toxicity: { sum: 0, count: 0 },
    work_hecticity: { sum: 0, count: 0 },
    outsider_harassment: { sum: 0, count: 0 },
    entrance_coaching_feasibility: { sum: 0, count: 0 },
    quality_of_life: { sum: 0, count: 0 },
    preparation_to_go_abroad: { sum: 0, count: 0 },
    patient_density: { sum: 0, count: 0 },
    doctor_density: { sum: 0, count: 0 },
    job_vacancy_density: { sum: 0, count: 0 },
    pharma_rep_density: { sum: 0, count: 0 },
    schooling_for_kids: { sum: 0, count: 0 },
    internet: { sum: 0, count: 0 },
    cost: { sum: 0, count: 0 }
  };

  if (data.length === 0) return metrics;

  data.forEach(item => {
    // Salary Calculation
    const avg = item.average_salary || parseFloat(item.salary.replace(/[^0-9.]/g, '')) || 0;
    const low = item.lowest_salary !== undefined ? item.lowest_salary : avg;
    const high = item.highest_salary !== undefined ? item.highest_salary : avg;

    if (avg > 0) {
      metrics.average_salary.sum += avg;
      metrics.average_salary.count += 1;
      metrics.average_salary.min = Math.min(metrics.average_salary.min, low);
      metrics.average_salary.max = Math.max(metrics.average_salary.max, high);
    }

    // Generic Metric Aggregation
    if (item.toxicity !== undefined) { metrics.toxicity.sum += item.toxicity; metrics.toxicity.count++; }
    if (item.work_hecticity !== undefined) { metrics.work_hecticity.sum += item.work_hecticity; metrics.work_hecticity.count++; }
    if (item.quality_of_life !== undefined) { metrics.quality_of_life.sum += item.quality_of_life; metrics.quality_of_life.count++; }
    
    // Additional metrics
    if (item.outsider_harassment !== undefined) { metrics.outsider_harassment.sum += item.outsider_harassment; metrics.outsider_harassment.count++; }
    if (item.entrance_coaching_feasibility !== undefined) { metrics.entrance_coaching_feasibility.sum += item.entrance_coaching_feasibility; metrics.entrance_coaching_feasibility.count++; }
    if (item.preparation_to_go_abroad !== undefined) { metrics.preparation_to_go_abroad.sum += item.preparation_to_go_abroad; metrics.preparation_to_go_abroad.count++; }
    if (item.patient_density !== undefined) { metrics.patient_density.sum += item.patient_density; metrics.patient_density.count++; }
    if (item.doctor_density !== undefined) { metrics.doctor_density.sum += item.doctor_density; metrics.doctor_density.count++; }
    if (item.job_vacancy_density !== undefined) { metrics.job_vacancy_density.sum += item.job_vacancy_density; metrics.job_vacancy_density.count++; }
    if (item.pharma_rep_density !== undefined) { metrics.pharma_rep_density.sum += item.pharma_rep_density; metrics.pharma_rep_density.count++; }
    if (item.schooling_for_kids !== undefined) { metrics.schooling_for_kids.sum += item.schooling_for_kids; metrics.schooling_for_kids.count++; }
    if (item.internet !== undefined) { metrics.internet.sum += item.internet; metrics.internet.count++; }
    if (item.cost !== undefined) { metrics.cost.sum += item.cost; metrics.cost.count++; }
  });

  return metrics;
}

export function formatStatistic(sum: number, count: number, decimals: number = 1): string {
  return count > 0 ? (sum / count).toFixed(decimals) : '-';
}
