import React from "react";

const Statistics = () => {
  return (
    <div className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl">
            Loved by over 70+ New Customers Every Day
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Elevate your taste buds to new heights with our chef discovery platform. Discover talented chefs near you who can turn any meal into an extraordinary culinary experience.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-5 bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Healthy
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary">
                    100%
                  </dd>
                </div>
                
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Authentic
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary">
                    99.9%
                  </dd>
                </div>

                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Chefs
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary">
                    150+
                  </dd>
                </div>

                <div className="flex flex-col border-t border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Recipes
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary">
                    850+
                  </dd>
                </div>


                <div className="flex flex-col border-t border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Users
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-primary">
                    5000+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
