import { Text, View, TouchableOpacity } from 'react-native';

import tw from '../../libs/tw';

const Pagination = ({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: any;
}) => {
  const changePageHandler = (page: number) => {
    onPage(page);
  };

  const items = [];

  if (totalPages > 0) {
    items.push(1);

    const middlePage = page;

    if (page <= 4) {
      for (let i = 2; i <= Math.min(Math.max(3, page), totalPages); i++) {
        if (!items.includes(i)) items.push(i);
      }

      if (middlePage + 1 < totalPages && !items.includes(middlePage + 1)) {
        items.push(middlePage + 1);
      }

      if (!items.includes(totalPages) && totalPages - 1 != items.at(-1))
        items.push('...');
    } else if (page >= totalPages - 3) {
      items.push('...');

      if (Math.min(totalPages - 2, page) == page && page - 1 > 0)
        items.push(page - 1);
      for (let i = Math.min(totalPages - 2, page); i < totalPages; i++) {
        if (!items.includes(i)) items.push(i);
      }
    } else {
      items.push('...');
      if (middlePage - 1 > 0 && !items.includes(middlePage - 1)) {
        items.push(middlePage - 1);
      }

      items.push(page);
      if (middlePage + 1 < totalPages && !items.includes(middlePage + 1)) {
        items.push(middlePage + 1);
      }
      items.push('...');
    }

    if (!items.includes(totalPages)) items.push(totalPages);

    if (page > 1) items.unshift('prev');
    if (page < totalPages) items.push('next');
  }

  return (
    <View
      style={tw`flex-row justify-center items-center flex-wrap gap-2 tablet:gap-4`}
    >
      {items.map((p, idx) => {
        const isActive = p === page;
        const isEllipsis = p === '...';

        const baseStyle = `px-2 py-1 tablet:px-4 tablet:py-2 rounded border tablet:border-2 ${
          isActive
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-primary border-primary'
        }`;

        if (p === 'prev' || p === 'next') {
          return (
            <TouchableOpacity
              key={`${p}-${idx}`}
              onPress={() =>
                changePageHandler(
                  p === 'prev'
                    ? Math.max(1, page - 1)
                    : Math.min(totalPages, page + 1)
                )
              }
              style={tw`px-2 py-1 rounded border-primary`}
            >
              <Text
                style={tw`text-primary text-sm tablet:text-2xl font-bold capitalize`}
              >
                {p}
              </Text>
            </TouchableOpacity>
          );
        }

        if (isEllipsis) {
          return (
            <Text
              key={`${p}-${idx}`}
              style={tw`text-primary font-bold text-sm tablet:text-2xl px-2`}
            >
              ...
            </Text>
          );
        }

        return (
          <TouchableOpacity
            key={`${p}-${idx}`}
            onPress={() => changePageHandler(p)}
            style={tw`${baseStyle}`}
          >
            <Text
              style={tw` text-sm tablet:text-2xl ${
                isActive ? 'text-white' : 'text-primary'
              } font-bold`}
            >
              {p}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Pagination;
