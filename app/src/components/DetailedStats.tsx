import { formatStatistic } from '@/lib/mapStatistics';
import type { MapStatistics } from '@/lib/mapStatistics';
import { BarChart3, AlertTriangle, Activity, Users, School, Wifi, IndianRupee, Briefcase, GraduationCap, Plane, Stethoscope } from 'lucide-react';

interface DetailedStatsProps {
  stats: MapStatistics;
  currencySymbol?: string;
}

const DetailedStats: React.FC<DetailedStatsProps> = ({ stats, currencySymbol = '₹' }) => {
  const averageSalary = stats.average_salary.count > 0 
    ? `${currencySymbol}${Math.round(stats.average_salary.sum / stats.average_salary.count).toLocaleString()}`
    : "N/A";
    
  const minSalary = stats.average_salary.min !== Infinity 
    ? `${currencySymbol}${stats.average_salary.min.toLocaleString()}`
    : "-";
    
  const maxSalary = stats.average_salary.max !== -Infinity 
    ? `${currencySymbol}${stats.average_salary.max.toLocaleString()}`
    : "-";

  const renderMetric = (label: string, sum: number, count: number, icon: React.ReactNode, colorClass: string, isCurrency: boolean = false) => {
    let value: string = '-';
    
    if (count > 0) {
      if (isCurrency) {
        value = Math.round(sum / count).toLocaleString();
      } else {
        value = formatStatistic(sum, count);
      }
    }
    
    const display = count === 0 ? '-' : (isCurrency ? `${currencySymbol}${value}` : `${value}/10`);
    
    return (
      <div className={`p-3 rounded-lg border ${colorClass} flex flex-col justify-between h-full`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">{label}</span>
          {icon}
        </div>
        <div className="font-bold text-lg">{display}</div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Primary Stats - Salary */}
      <div>
        <div className="flex items-center gap-2 mb-3 text-slate-700 font-semibold">
          <BarChart3 className="w-4 h-4" />
          <h3>Financial Overview</h3>
        </div>
        
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mb-3">
          <div className="text-xs text-emerald-600 font-medium mb-1">Average Salary</div>
          <div className="text-2xl font-bold text-emerald-700">{averageSalary}</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Lowest</div>
            <div className="font-semibold text-slate-700">{minSalary}</div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Highest</div>
            <div className="font-semibold text-slate-700">{maxSalary}</div>
          </div>
        </div>
      </div>

      {/* Workplace Environment */}
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Workplace Environment</h4>
        <div className="grid grid-cols-2 gap-3">
          {renderMetric("Toxicity", stats.toxicity.sum, stats.toxicity.count, <AlertTriangle className="w-3 h-3" />, "bg-red-50 border-red-100 text-red-700")}
          {renderMetric("Hecticity", stats.work_hecticity.sum, stats.work_hecticity.count, <Activity className="w-3 h-3" />, "bg-orange-50 border-orange-100 text-orange-700")}
          {renderMetric("Harassment", stats.outsider_harassment.sum, stats.outsider_harassment.count, <Users className="w-3 h-3" />, "bg-amber-50 border-amber-100 text-amber-700")}
          {renderMetric("QoL", stats.quality_of_life.sum, stats.quality_of_life.count, <Stethoscope className="w-3 h-3" />, "bg-green-50 border-green-100 text-green-700")}
        </div>
      </div>

      {/* Career & Education */}
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Career & Growth</h4>
        <div className="grid grid-cols-2 gap-3">
          {renderMetric("Coaching", stats.entrance_coaching_feasibility.sum, stats.entrance_coaching_feasibility.count, <GraduationCap className="w-3 h-3" />, "bg-blue-50 border-blue-100 text-blue-700")}
          {renderMetric("Abroad Prep", stats.preparation_to_go_abroad.sum, stats.preparation_to_go_abroad.count, <Plane className="w-3 h-3" />, "bg-indigo-50 border-indigo-100 text-indigo-700")}
          {renderMetric("Vacancies", stats.job_vacancy_density.sum, stats.job_vacancy_density.count, <Briefcase className="w-3 h-3" />, "bg-cyan-50 border-cyan-100 text-cyan-700")}
        </div>
      </div>

      {/* Demographics & Density */}
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Demographics</h4>
        <div className="grid grid-cols-2 gap-3">
          {renderMetric("Patients", stats.patient_density.sum, stats.patient_density.count, <Users className="w-3 h-3" />, "bg-teal-50 border-teal-100 text-teal-700")}
          {renderMetric("Doctors", stats.doctor_density.sum, stats.doctor_density.count, <Stethoscope className="w-3 h-3" />, "bg-emerald-50 border-emerald-100 text-emerald-700")}
          {renderMetric("Pharma Reps", stats.pharma_rep_density.sum, stats.pharma_rep_density.count, <Briefcase className="w-3 h-3" />, "bg-purple-50 border-purple-100 text-purple-700")}
        </div>
      </div>

      {/* Living Conditions */}
      <div>
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Living Conditions</h4>
        <div className="grid grid-cols-2 gap-3">
          {renderMetric("Cost", stats.cost.sum, stats.cost.count, <IndianRupee className="w-3 h-3" />, "bg-rose-50 border-rose-100 text-rose-700", true)}
          {renderMetric("Internet", stats.internet.sum, stats.internet.count, <Wifi className="w-3 h-3" />, "bg-violet-50 border-violet-100 text-violet-700")}
          {renderMetric("Schooling", stats.schooling_for_kids.sum, stats.schooling_for_kids.count, <School className="w-3 h-3" />, "bg-yellow-50 border-yellow-100 text-yellow-700")}
        </div>
      </div>
    </div>
  );
};

export default DetailedStats;
