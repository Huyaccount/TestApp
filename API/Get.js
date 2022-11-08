import axios from "axios";
export const GetInforUser =(UserID)=>
{
    var config = {
        method: 'get',
        url: 'https://xzflfhtscparrsbvtbkq.supabase.co/rest/v1/TienDoHoanthanh?UserID=eq.'+{UserID}+'&select=*',
        headers: { 
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmxmaHRzY3BhcnJzYnZ0YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTUwMjQsImV4cCI6MTk4MzQ5MTAyNH0.zWRIUgvYMqxMlkOrleWTAJiLSQn-wm049JRIxyq-qSo', 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmxmaHRzY3BhcnJzYnZ0YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTUwMjQsImV4cCI6MTk4MzQ5MTAyNH0.zWRIUgvYMqxMlkOrleWTAJiLSQn-wm049JRIxyq-qSo', 
          'Range': '0-9'
        }
      };
      const data = 
      axios(config)
      .then( (response) => 
        response.data
      )
      return data
} 