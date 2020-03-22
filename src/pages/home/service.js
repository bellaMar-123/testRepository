
import request from '@/utils/request';
export async function queryHome() {
  return request('/api/home');
}
