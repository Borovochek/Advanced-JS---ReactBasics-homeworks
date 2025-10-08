import { useState, useRef } from 'react'
import './App.css'

interface DistanceRecord {
  id: string;
  date: string;
  distance: number;
}

function App() {
  const dateRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const [dailyDistances, setDailyDistances] = useState<DistanceRecord[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Функция для форматирования даты из YYYY-MM-DD в DD.MM.YYYY
  const formatDateForDisplay = (dateString: string): string => {
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
  };

  // Функция для форматирования даты из DD.MM.YYYY в YYYY-MM-DD (для input type="date")
  const formatDateForInput = (dateString: string): string => {
    const [day, month, year] = dateString.split('.');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dateRef.current || !distanceRef.current) return;

    const date = dateRef.current.value; // В формате YYYY-MM-DD
    const distance = distanceRef.current.value;

    if (!date || !distance) return;

    const distanceValue = parseFloat(distance) || 0;
    const formattedDate = formatDateForDisplay(date); // Форматируем для отображения

    // Проверяем, редактируем ли мы существующую запись
    if (editingId) {
      setDailyDistances(prevDistances => 
        prevDistances.map(record =>
          record.id === editingId
            ? { ...record, date: formattedDate, distance: distanceValue }
            : record
        )
      );
      setEditingId(null);
    } else {
      // Проверяем, существует ли уже запись с такой датой
      const existingRecordIndex = dailyDistances.findIndex(record => record.date === formattedDate);
      
      if (existingRecordIndex !== -1) {
        // Обновляем существующую запись - суммируем дистанции
        setDailyDistances(prevDistances => 
          prevDistances.map((record, index) =>
            index === existingRecordIndex
              ? { ...record, distance: record.distance + distanceValue }
              : record
          )
        );
      } else {
        // Добавляем новую запись
        const newRecord: DistanceRecord = {
          id: Date.now().toString(),
          date: formattedDate,
          distance: distanceValue
        };
        setDailyDistances(prevDistances => [...prevDistances, newRecord]);
      }
    }

    // Очищаем поля ввода
    dateRef.current.value = '';
    distanceRef.current.value = '';
  };

  const handleEdit = (id: string): void => {
    const record = dailyDistances.find(element => element.id === id);
    if (!record || !dateRef.current || !distanceRef.current) return;

    // Заполняем поля ввода данными записи
    // Конвертируем дату из DD.MM.YYYY в YYYY-MM-DD для input type="date"
    dateRef.current.value = formatDateForInput(record.date);
    distanceRef.current.value = record.distance.toString();
    
    // Устанавливаем режим редактирования
    setEditingId(id);
  };

  const handleDelete = (id: string): void => {
    setDailyDistances(prevDistances => prevDistances.filter(element => element.id !== id));
    // Если удаляем редактируемую запись, сбрасываем режим редактирования
    if (editingId === id) {
      setEditingId(null);
      if (dateRef.current && distanceRef.current) {
        dateRef.current.value = '';
        distanceRef.current.value = '';
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form id="trainingForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Дата</label>
              <input 
                type="date" 
                ref={dateRef} 
                id="date" 
                name="date" 
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="distance">Пройдено км</label>
              <input 
                type="number" 
                ref={distanceRef} 
                id="distance" 
                name="distance" 
                placeholder="5.7" 
                step="0.1" 
                min="0" 
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {editingId ? 'Сохранить' : 'OK'}
            </button>
          </div>
        </form>
      </div>

      <div className="data-table">
        <div className="table-header">
          <div className="col-date">Дата (ДД.ММ.ГГ)</div>
          <div className="col-distance">Пройдено км</div>
          <div className="col-actions">Действия</div>
        </div>

        <div className="table-body">
          {dailyDistances.length === 0 ? (
            <div className="empty-state">Нет данных о тренировках</div>
          ) : (
            dailyDistances.map((element) => (
              <div className="table-row" key={element.id}>
                <div className="col-date">{element.date}</div>
                <div className="col-distance">{element.distance}</div>
                <div className="col-actions">
                  <button 
                    className="action-btn edit-btn" 
                    title="Редактировать" 
                    onClick={() => handleEdit(element.id)}
                  >
                    ✎
                  </button>
                  <button 
                    className="action-btn delete-btn" 
                    title="Удалить" 
                    onClick={() => handleDelete(element.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App