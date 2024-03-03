import 'server-only';

import { Text, View } from 'react-native';
import ClientOnlyImport from './client';

export default function ServerOnlyImport() {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: 'green',
        borderStyle: 'dashed',
        padding: 8,
        gap: 8,
      }}>
      <Text style={{ fontWeight: 'bold' }}>16) import server-only (Server Component)</Text>
      <ClientOnlyImport />
    </View>
  );
}
