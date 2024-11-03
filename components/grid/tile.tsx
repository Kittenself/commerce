import clsx from 'clsx';
import Image from 'next/image';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex flex-col h-full w-full overflow-hidden rounded-lg border bg-white dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active,
          'hover:border-neutral-300 dark:hover:border-neutral-700': isInteractive
        }
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        {props.src ? (
          <Image
            className={clsx('h-full w-full object-cover', {
              'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
            })}
            {...props}
          />
        ) : null}
      </div>

      {label ? (
        <div className="flex flex-col p-4 space-y-2">
          <h3 className="text-lg font-medium text-black dark:text-white">
            {label.title}
          </h3>
          <div className="text-md font-medium text-black dark:text-white">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: label.currencyCode,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }).format(parseInt(label.amount))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
