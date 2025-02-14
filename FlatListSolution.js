The solution uses the `windowSize` prop to control how many items are rendered at once.  It also uses the `removeClippedSubviews` prop to remove off-screen items from the rendering tree.  Additionally, the `keyExtractor` prop is used to improve the performance of item updates.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
  windowSize={10}
  removeClippedSubviews={true}
/>
```
By implementing these optimizations, the performance of the `FlatList` component can be significantly improved, especially when dealing with large datasets.