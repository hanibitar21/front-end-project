import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedCategory, setSelectedCategory] = useState('All categories');

  const [isClicked, setIsClicked] = useState(false);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsClicked(false);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
      <Menu.Button 
          className={classNames(
            "inline-flex items-center gap-x-1.5 bg-accent-white text-gray-900 text-sm font-semibold hover:text-red text-nowrap",
            isClicked ? "text-red" : "text-gray-900"
          )}
          onClick={() => setIsClicked(true)} // Set clicked state to true
        >
          {selectedCategory}
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transition-transform" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {['All categories', 'Games', 'Hardware', 'Merchandise', 'News & Events', 'Support'].map((category) => (
              <Menu.Item key={category}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700',
                      'block px-4 py-2 text-sm font-semibold'
                    )}
                    onClick={() =>{
                        handleSelectCategory(category);
                        setIsClicked(true);
                    }
                    } 
                  >
                    {category}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
