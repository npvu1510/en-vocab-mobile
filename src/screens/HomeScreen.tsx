import { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import BaseBottomSheet, {
  BaseBottomSheetRef,
} from '../components/ui/BaseBottomSheet';

import ActionButton from '../components/ui/ActionButton';
import tw from '.././libs/tw';
import VocabularyFilter from '../components/VocabularyFilter';
import displayOptions from '../constants/displayOptions';
import VocabularyCard from '../components/VocabularyItem';
import axios from 'axios';
import { moderateScale } from 'react-native-size-matters';
import Pagination from '../components/ui/Pagination';

type Vocabulary = {
  Id: number;
  definition: string;
  image?: string;
  audioGb?: string;
  audioUs?: string;
};

const BASE_IMAGE_SIZE = 128;

const HomeScreen = () => {
  // Filter bottom sheet
  const openFilterBtnRef = useRef<BaseBottomSheetRef>(null);

  const openFilterHandler = () => {
    openFilterBtnRef.current.expand();
  };

  // filter
  const [currentDisplayMode, setCurrentDisplayMode] = useState(
    () => displayOptions.at(0)['id']
  );

  const toggleDisplayModeHandler = (displayOptionId) => {
    if (displayOptionId === currentDisplayMode) return;
    setCurrentDisplayMode(displayOptionId);
  };

  // pagination
  const [page, setPage] = useState(1);
  const [hidePagination, setHidePagination] = useState(false);

  const changePageHandler = (newPage: number) => {
    if (page === newPage) return;
    setHidePagination(true);
    setPage(newPage);
  };

  // api
  const [dictionaries, setDictionaries] = useState<Vocabulary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');

  const [limit, setLimit] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(0);

  const fetchDictionaries = async () => {
    setIsLoading(true);

    try {
      const {
        data: {
          code,
          data: { dictionaries, totalPages },
        },
      } = await axios({
        method: 'get',
        url: 'http://api.envocab.io.vn/api/v1/dictionaries',
        params: {
          limit: limit,
          page: page,
        },
      });

      if (code !== 'SUCCESS')
        throw new Error('Error while fetching dictionaries');

      await new Promise((resolve) => {
        setTimeout(resolve, 250);
      });

      if (!dictionaries || dictionaries.length === 0)
        throw new Error('Fetched dictionaries data is invalid');

      setTotalPages(totalPages);
      setDictionaries(dictionaries);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
      setHidePagination(false);
    }
  };
  useEffect(() => {
    fetchDictionaries();
  }, [page]);

  return (
    <View style={tw.style('flex-1 bg-white p-2 tablet:p-6')}>
      <View style={tw.style('flex-1 gap-3 tablet:gap-5')}>
        <View style={tw.style('flex-row justify-between items-center')}>
          <Text style={tw.style('text-sm tablet:text-2xl')}>
            (<Text style={tw.style('font-bold')}>{limit}</Text> vocabulary per
            page, out of total{' '}
            <Text style={tw.style('font-bold')}>{totalPages}</Text> pages)
          </Text>
          <ActionButton
            buttonSize={24}
            buttonStyle="bg-primary-light"
            iconName="filter"
            iconColor="white"
            iconSize={16}
            radius="rounded-md"
            onPress={openFilterHandler}
          />
        </View>

        {isLoading && (
          <View style={tw`flex-1 justify-center items-center`}>
            <ActivityIndicator size="large" color={tw.color('primary')} />
          </View>
        )}
        {!isLoading && error && <Text>{error}</Text>}

        {!isLoading &&
          !error &&
          !hidePagination &&
          currentDisplayMode === 1 && (
            <>
              <View style={tw.style('flex-1')}>
                <FlatList
                  data={dictionaries}
                  keyExtractor={(item) => {
                    return `${item.Id}`;
                  }}
                  renderItem={({ item }) => {
                    const cardWrapperStyle =
                      currentDisplayMode === 1
                        ? 'w-full py-2 tablet:py-4'
                        : `w-1/${currentDisplayMode} p-2 tablet:p-4`;

                    const imageSize = moderateScale(
                      Math.trunc(BASE_IMAGE_SIZE / currentDisplayMode / 4)
                    );

                    return (
                      <View style={tw.style(cardWrapperStyle)}>
                        <VocabularyCard
                          vocab={{
                            definition: item.definition,
                            audioGb: item.audioGb,
                            audioUs: item.audioUs,
                            image: item.image,
                          }}
                          definitionStyle="text-xl tablet:text-3xl"
                          imageStyle={`w-${imageSize} h-${imageSize}`}
                          // cardStyles="my-3 py-5 tablet:my-6 tablet:py-10"
                        />
                      </View>
                    );
                  }}
                />
              </View>
              <View style={tw.style('')}>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPage={changePageHandler}
                />
              </View>
            </>
          )}

        {!isLoading && !error && !hidePagination && currentDisplayMode > 1 && (
          <>
            <View style={tw.style('flex-1')}>
              <FlatList
                data={dictionaries}
                keyExtractor={(item, _) => {
                  return `${item.Id}`;
                }}
                numColumns={currentDisplayMode}
                renderItem={({ item, index }) => {
                  const cardWrapperStyle =
                    currentDisplayMode === 1
                      ? 'w-full py-2 tablet:py-4'
                      : `w-1/${currentDisplayMode} p-2 tablet:p-4`;

                  return (
                    <View style={tw.style(cardWrapperStyle)}>
                      <VocabularyCard
                        vocab={{
                          definition: item.definition,
                          audioGb: item.audioGb,
                          audioUs: item.audioUs,
                          image: item.image,
                        }}
                        definitionStyle="text-xl tablet:text-3xl"
                        imageStyle={`w-${moderateScale(
                          Math.trunc(BASE_IMAGE_SIZE / currentDisplayMode / 4)
                        )} h-${moderateScale(
                          Math.trunc(BASE_IMAGE_SIZE / currentDisplayMode / 4)
                        )}`}
                        // cardStyles="my-3 py-5 tablet:my-6 tablet:py-10"
                      />
                    </View>
                  );
                }}
              />
            </View>
            <View style={tw.style('')}>
              <Pagination
                page={page}
                totalPages={totalPages}
                onPage={changePageHandler}
              />
            </View>
          </>
        )}
      </View>

      <BaseBottomSheet ref={openFilterBtnRef}>
        <VocabularyFilter
          currentDisplayMode={currentDisplayMode}
          onDisplayMode={toggleDisplayModeHandler}
        />
      </BaseBottomSheet>
    </View>
  );
};

export default HomeScreen;
