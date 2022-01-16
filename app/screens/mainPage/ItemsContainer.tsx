import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Item from './Item';
import {getProducts} from '../../services/productService';
import {styles} from './styles/mainStyles';

export const ItemsContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [links, setLinks] = useState<any>({});
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    loadProductsData();
  }, []);

  const loadProductsData = () => {
    setLoading(true);
    return getProducts()
      .then(products => {
        setItems(products.data);
        setLinks(products.links);
      })
      .finally(() => setLoading(false));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadProductsData().then(() => setRefreshing(false));
  }, []);

  const loadMoreProducts = () => {
    if (links?.next !== links?.self) {
      setLoading(true);
      getProducts(links.next)
        .then(products => {
          setItems([...items, ...products.data]);
          setLinks(products.links);
        })
        .finally(() => setLoading(false));
    }
  };

  const renderFooter = () => {
    if (links.next !== links.self) {
      return (
        //Footer View with Load More button
        <View>
          <TouchableOpacity activeOpacity={0.9} style={styles.loadButton}>
            <Text style={styles.loadButtonText}>Loading</Text>
            {isLoading ? (
              <ActivityIndicator color="white" style={{marginLeft: 8}} />
            ) : null}
          </TouchableOpacity>
        </View>
      );
    } else return null;
  };

  return (
    <View style={styles.productsContainer}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal={false}
        data={items}
        numColumns={2}
        renderItem={({item}) => (
          <Item
            name={item.attributes.name}
            display_price={item.attributes.display_price}
            id={item.id}
          />
        )}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
