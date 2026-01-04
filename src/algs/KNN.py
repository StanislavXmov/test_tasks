import numpy as np
from collections import Counter
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.datasets import make_classification

class ImprovedKNN:
    def __init__(self, k=3, distance_metric='euclidean'):
        self.k = k
        self.distance_metric = distance_metric
        
    def fit(self, X, y):
        self.X_train = X
        self.y_train = y
        
    def predict(self, X):
        return np.array([self._predict(x) for x in X])
    
    def _predict(self, x):
        # Вычисляем расстояния
        if self.distance_metric == 'euclidean':
            distances = [self._euclidean(x, x_train) 
                        for x_train in self.X_train]
        elif self.distance_metric == 'manhattan':
            distances = [self._manhattan(x, x_train) 
                        for x_train in self.X_train]
        elif self.distance_metric == 'cosine':
            distances = [self._cosine(x, x_train) 
                        for x_train in self.X_train]
        else:
            raise ValueError(f"Unknown metric: {self.distance_metric}")
            
        # Получаем k ближайших соседей
        k_indices = np.argsort(distances)[:self.k]
        k_nearest_labels = [self.y_train[i] for i in k_indices]
        
        # Голосование большинства
        return Counter(k_nearest_labels).most_common(1)[0][0]
    
    def _euclidean(self, x1, x2):
        return np.sqrt(np.sum((x1 - x2) ** 2))
    
    def _manhattan(self, x1, x2):
        return np.sum(np.abs(x1 - x2))
    
    def _cosine(self, x1, x2):
        dot_product = np.dot(x1, x2)
        norm1 = np.linalg.norm(x1)
        norm2 = np.linalg.norm(x2)
        return 1 - dot_product / (norm1 * norm2)  # 1 - косинусное сходство



# iris = load_iris()
# X, y = iris.data, iris.target

X, y = make_classification(
    n_samples=10,
    n_features=5,
    random_state=42
)

# 2. Разделяем данные
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# print(X_train, X_test, y_train, y_test)

# Тестируем разные метрики
for metric in ['euclidean', 'manhattan', 'cosine']:
    knn = ImprovedKNN(k=5, distance_metric=metric)
    knn.fit(X_train, y_train)
    preds = knn.predict(X_test)
    print(y_test, preds)
    print(f"{metric}: {accuracy_score(y_test, preds):.3f}")