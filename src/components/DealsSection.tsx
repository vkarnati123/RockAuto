interface Deal {
  id: number;
  title: string;
  description: string;
  discount: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: 'Free Shipping on Orders Over $50',
    description: 'Get your parts delivered fast with no extra cost',
    discount: 'FREE SHIPPING',
  },
  {
    id: 2,
    title: 'Winter Sale - Up to 40% Off',
    description: 'Premium brake pads, rotors, and suspension components',
    discount: '40% OFF',
  },
  {
    id: 3,
    title: 'Buy 3 Get 1 Free - Oil Filters',
    description: 'Stock up on quality oil filters for all major brands',
    discount: 'BUY 3 GET 1',
  },
  {
    id: 4,
    title: 'Member Exclusive - Extra 10% Off',
    description: 'Join our rewards program for additional savings',
    discount: '10% OFF',
  },
  {
    id: 5,
    title: 'Price Match Guarantee',
    description: "Find a lower price? We'll match it and beat it by 5%",
    discount: 'PRICE MATCH',
  },
];

export function DealsSection() {
  return (
    <div className="mt-12">
      <div className="h-[3px] bg-[#6366f1] mb-6 rounded-full" style={{ width: '60px' }} />
      
      <div className="space-y-5">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white border border-gray-200 rounded-lg h-[60px] px-6 flex items-center justify-between hover:border-[#6366f1] hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex-1">
              <h4 className="text-gray-900 group-hover:text-[#6366f1] transition-colors">{deal.title}</h4>
              <p className="text-sm text-gray-600">{deal.description}</p>
            </div>
            <div className="shrink-0 bg-[#ef4444] text-white px-4 py-2 rounded-lg">
              {deal.discount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
