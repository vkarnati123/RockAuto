import { Car, Plus, Trash2, Edit2, X, Check, Info } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';

export interface Vehicle {
  id: number;
  year: string;
  make: string;
  model: string;
  engine: string;
  nickname?: string;
  isDefault?: boolean;
}

interface GarageProps {
  vehicles: Vehicle[];
  onAddVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  onUpdateVehicle: (id: number, vehicle: Omit<Vehicle, 'id'>) => void;
  onDeleteVehicle: (id: number) => void;
  onSetDefault: (id: number) => void;
  onBack: () => void;
}

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString());

const makes = [
  'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 
  'Dodge', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Lexus',
  'Mazda', 'Mercedes-Benz', 'Nissan', 'Ram', 'Subaru', 'Tesla', 'Toyota',
  'Volkswagen', 'Volvo'
];

const engines = [
  '1.5L 4-Cylinder',
  '2.0L 4-Cylinder',
  '2.5L 4-Cylinder',
  '3.0L V6',
  '3.5L V6',
  '3.6L V6',
  '5.0L V8',
  '5.7L V8',
  '6.2L V8',
  'Electric',
  'Hybrid'
];

export function Garage({ vehicles, onAddVehicle, onUpdateVehicle, onDeleteVehicle, onSetDefault, onBack }: GarageProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    engine: '',
    nickname: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.year || !formData.make || !formData.model || !formData.engine) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingId !== null) {
      onUpdateVehicle(editingId, formData);
      toast.success('Vehicle updated successfully!');
      setEditingId(null);
    } else {
      onAddVehicle({ ...formData, isDefault: vehicles.length === 0 });
      toast.success('Vehicle added to garage!');
    }

    setFormData({ year: '', make: '', model: '', engine: '', nickname: '' });
    setShowForm(false);
  };

  const handleEdit = (vehicle: Vehicle) => {
    setFormData({
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      engine: vehicle.engine,
      nickname: vehicle.nickname || '',
    });
    setEditingId(vehicle.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setFormData({ year: '', make: '', model: '', engine: '', nickname: '' });
    setEditingId(null);
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to remove this vehicle from your garage?')) {
      onDeleteVehicle(id);
      toast.info('Vehicle removed from garage');
    }
  };

  return (
    <main className="flex-1 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-[#6366f1] hover:text-[#4f46e5] transition-colors"
            >
              ← Back to Shopping
            </button>
          </div>
        </div>
        
        <div className="h-[3px] bg-[#6366f1] mb-6 rounded-full" style={{ width: '120px' }} />
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] text-gray-900 mb-2">My Garage</h1>
            <p className="text-gray-600">
              Manage your vehicles to find the perfect parts
            </p>
          </div>

          {!showForm && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center gap-2 bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Vehicle
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                <p className="max-w-[240px]">Add a vehicle to get personalized part recommendations and separate shopping carts</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Add/Edit Vehicle Form */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-[24px] text-gray-900 mb-6">
            {editingId !== null ? 'Edit Vehicle' : 'Add New Vehicle'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Year */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Year <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6366f1]"
                  required
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Make <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.make}
                  onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6366f1]"
                  required
                >
                  <option value="">Select Make</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6366f1]"
                  placeholder="e.g., Camry, F-150, Civic"
                  required
                />
              </div>

              {/* Engine */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Engine <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.engine}
                  onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6366f1]"
                  required
                >
                  <option value="">Select Engine</option>
                  {engines.map((engine) => (
                    <option key={engine} value={engine}>{engine}</option>
                  ))}
                </select>
              </div>

              {/* Nickname */}
              <div className="col-span-2">
                <label className="block text-gray-700 mb-2 flex items-center gap-2">
                  Nickname (Optional)
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                      <p className="max-w-[200px]">Give your vehicle a friendly name to easily identify it</p>
                    </TooltipContent>
                  </Tooltip>
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6366f1]"
                  placeholder="e.g., My Daily Driver, Work Truck"
                />
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors"
              >
                {editingId !== null ? 'Update Vehicle' : 'Add Vehicle'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Vehicle List */}
      <div className="grid grid-cols-1 gap-6">
        {vehicles.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-900 mb-2">No vehicles in your garage</h3>
            <p className="text-gray-600 mb-6">
              Add your first vehicle to get personalized part recommendations
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 bg-[#6366f1] text-white px-6 py-3 rounded-lg hover:bg-[#4f46e5] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Your First Vehicle
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                <p className="max-w-[240px]">Each vehicle gets its own shopping cart to keep parts organized</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ) : (
          vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-all ${
                vehicle.isDefault ? 'border-[#6366f1]' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#eef2ff] rounded-lg flex items-center justify-center">
                    <Car className="w-8 h-8 text-[#6366f1]" />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[20px] text-gray-900">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      {vehicle.isDefault && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="bg-[#6366f1] text-white text-sm px-3 py-1 rounded-full cursor-help">
                              Default
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                            <p className="max-w-[220px]">This is your default vehicle. Parts will be filtered for this vehicle and it has a separate cart.</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                    {vehicle.nickname && (
                      <p className="text-gray-600 mb-2">{vehicle.nickname}</p>
                    )}
                    <p className="text-gray-500">
                      <span className="inline-block mr-4">Engine: {vehicle.engine}</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {!vehicle.isDefault && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => onSetDefault(vehicle.id)}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                        <p>Set as default vehicle for shopping</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleEdit(vehicle)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                      <p>Edit vehicle details</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => handleDelete(vehicle.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-white text-gray-900 border border-gray-200 shadow-lg">
                      <p>Remove vehicle from garage</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {vehicle.isDefault && (
                <div className="mt-4 p-3 bg-[#eef2ff] rounded-lg">
                  <p className="text-sm text-[#4338ca]">
                    Parts in your cart are being filtered for this vehicle
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {vehicles.length > 0 && (
        <div className="mt-8 p-6 bg-[#eef2ff] rounded-lg border-2 border-[#6366f1]/20">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 mb-2 flex items-center gap-2">
                💡 Pro Tip: Managing Multiple Vehicles
              </h3>
              <p className="text-gray-700">
                Your default vehicle is used to filter parts and ensure compatibility. 
                You can switch between vehicles in your shopping cart - each vehicle has its own separate cart to keep parts organized!
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
