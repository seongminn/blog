---
date: '2020-07-29'
title: '[Java] 제네릭스'
category: 'Java'
summary: '제네릭스가 뭔데 도대체'
thumbnail: './test.png'
tags: ['# Java', '# 자바의 정석', '# Generics']
---

# 📌 제네릭스

다양한 타입의 객체를 다루는 메서드나, 컬렉션 클래스에 컴파일 시의 **타입 체크**를 해주는 기능이다. 이 기능을 통해 객체가 다른 타입으로 저장되거나, 잘못 형변환되어 발생할 수 있는 오류를 줄일 수 있기 때문에 **타입 안정성**을 높여준다. 또한, 컬렉션 클래스에 저장된 객체를 꺼낼 때마다 타입 체크를 하는 수고를 덜 수 있기 때문에 코드가 간결해진다는 장점도 있다.

## 1. 제네릭스 (Generics)

### 1-1. 제네릭 클래스의 선언

```java
class Box<T> {
	T item;

    void setItem(T item) {this.item = item;}
	T getItem() {return item;}
```

위의 코드와 같이 클래스 옆에 `<T>`를 붙이면 된다.
`T`는 `타입 변수`를 의미하는데, `Type`의 첫 글자에서 따온 것이다. 이 때, 타입 변수로 다른 것을 사용하는 것도 가능하지만, 상황에 맞게 의미있는 문자를 사용하는 것이 좋다. 예를 들면 `ArrayList`의 경우에는 `Element`를 의미하는 `E`, `Map`의 경우에는 `Key`와 `Value`를 의미하는 `K`, `V`를 자주 사용한다.

이후, `Box` 클래스의 객체를 생성하는 경우에는, 참조 변수와 생성자에 타입 `T` 대신 실제 타입을 지정해주어야 한다.

```java
Box<String> b = new Box<String>;
b.setItem("ABC");
b.setItem(new Object()); // String 타입이 아니기 때문에 에러 발생
```

<br />

#### 제네릭스의 용어

```java
class Box<T> {}

Box<String> b = new Box<String>();
```

- `Box<T>` : 제네릭 클래스
- `Box` : 원시 타입(raw type)
- `T` : 타입 변수, 혹은 타입 매개변수
- `<String>` : 매개변수화된 타입, 혹은 대입된 타입
- `Box<String> b = new Box<String>();` : 제네릭 타입 호출
  <br/>

#### 제네릭스의 제한

- `static` 멤버는 대입된 타입의 종류에 관계없이 모든 객체에 동일하게 동작해야 한다. 그래서 인스턴스별로 다르게 동작할 수 있게 하기 위해 탄생한 제네릭스와는 모순이 발생하기 때문에 `static` 멤버에는 타입 변수 `T`를 사용할 수 없다.

- 제네릭 배열 타입의 참조변수를 선언하는 것은 가능하지만, 제네릭 타입의 배열을 생성하는 것은 불가하다. 이는 `new` 연산자의 특성 때문이다. `new` 연산자는 컴파일 시점에 타입의 종류를 정확히 알아야 하는 특성을 갖고 있는데, 타입 변수를 사용하면 컴파일 시점에 어떤 타입이 대입될 지 전혀 알 수 없다. 같은 이유로, `instanceof` 연산자도 `T`를 피연산자로 사용할 수 없다.
  <br />

### 1-2. 제네릭 클래스의 객체 생성과 사용

```java
Box<Apple> appleBox = new Box<Apple>(); // OK
```

`Box<T>`의 객체를 생성할 때는 참조변수와 생성자에 대입된 타입이 일치해야 한다. 다만, 두 제네릭 클래스의 타입이 상속관계에 있고, 대입된 타입이 같다면 에러가 발생하지 않는다.

```java
Box<Apple> appleBox = new FruitBox<Apple>(); // FruitBox는 Box의 자손
```

또한 객체를 추가하는 경우에도, 대입된 타입과 다른 타입의 객체는 추가할 수 없지만, 타입 `T`의 자손들은 메서드의 매개변수가 될 수 있다.

```java
Box<Fruit> fruitBox = new Box<Fruit>();
fruitBox.add(new Apple()); // Apple은 Fruit의 자손
```

<br />

### 1-3. 제한된 제네릭 클래스

제네릭 타입에 `extends`를 사용하면, 특정 타입의 자손들만 대입할 수 있다.

```java
class FruitBox<T extends Fruit> {
	ArrayList<T> list = new ArrayList<T>(); // Fruit의 자손만 타입으로 지정 가능
}
```

<br />

### 1-4. 와일드 카드

```java
class Juicer {
	static Juice makeJuice(FruitBox<Fruit> box) {
    	String tmp = "";
        for (Fruit f : box.getList()) temp += f + " ";
        return new Juice(tmp);
    }
}
```

위의 예시에서 `Juicer` 클래스는 제네릭 클래스가 아닌데다, `makeJuice` 메서드는 `static` 메서드이다. 그렇기 때문에 제네릭스를 적용할 수 없다.

이런 경우에는 **와일드 카드**를 사용해서 타입을 지정할 수 있다.

- `<? extends T>` : T와 그 자손들
- `<? super T>` : T와 그 조상들
- `<?>` : 모든 타입 가능 / `<T extends Object>`와 동일

> 와일드 카드와 `Comparator`
>
> ```java
> static <T> void sort(List<T> list, Comparator<? super T> c)
> ```
>
> 해당 제네릭 메서드에서 첫 번째 매개변수는 정렬할 대상을, 두 번째 매개변수는 정렬할 >방법이 정의된 `Comparator`를 가리킨다. 이 때, `List<Apple>`을 정렬하기 위해서는 `Comparator<Apple>`이, `List<Grape>`를 정렬하기 위해선 `Comparator<Grape>`가 필요하다. `Fruit`의 자손이 생길 때마다 같은 타입의 `Comparator`를 계속해서 생성해줘야 한다.
> 이런 경우에는 `Comparator<? super T>`처럼 선언하여 조상 타입의 `Comparator`도 지정할 수 있다.

<br />

### 1-5. 제네릭 메서드

메서드의 선언부에 제네릭 타입이 선언된 메서드를 뜻한다. 반환 타입 바로 앞에 제네릭 타입을 선언한다.

메서드에 정의된 타입 매개변수는 클래스에 정의된 것과 전혀 다른 것이다. 지역 변수를 선언한 것과 같다고 생각하면 이해하기가 쉽다. 그리고, 메서드 내에서만 지역적으로 사용되므로, 메서드가 `static`인지 아닌지는 중요하지 않다.
<br />

### 1-6. 제네릭 타입의 형변환

- 제네릭 타입과 넌제네릭 타입 간의 형변환 - OK
- 대입된 타입이 다른 제네릭 타입 간의 형변환 - Error
- 대입된 타입에서 와일드 카드를 사용한 제네릭 타입으로의 형변환 - OK
- 와일드 카드를 사용한 제네릭 타입에서 대입된 타입으로의 형변환 - Error

<br />

### 1-7. 제네릭 타입의 제거

1. 제네릭 타입의 경계 제거

```java
class Box<T extends Fruit> {
	void add(T t) {
    	...
	}
}

    			↓

class Box {
	void add(Fruit t) {
		...
	}
}
```

2. 제네릭 타입을 제거한 뒤, 타입이 일치하지 않으면 형변환 추가

```java
T get(int i) {
	return list.get(i);
}
```

    			↓

```java
Fruit get(int i) {
	return (Fruit)list.get(i);
}
```

3. 와일드 카드가 포함되어 있는 경우에는 적절한 타입으로의 형변환 추가

<br/>

## 2. 열거형 (enums)

### 2-1. 열거형이란?

서로 관련된 상수를 편리하게 선언하기 위한 것

```java
class Card {
	enum Kind {CLOVER, HEART, DIAMOND, SPADE} // 순서대로 0, 1, 2, 3
	enum Value {TWO, THREE, FOUR} // 순서대로 0, 1, 2

    final Kind kind; // 타입은 int가 아니라 열거형 이름을 사용한다.
    final Value value;
```

이 때, 자바의 열거형은 **타입에 안전한 열거형**이라서 실제 값이 같은 경우에도 타입이 다르면 서로 다른 것으로 취급한다.
<br />

### 2-2. 열거형의 정의와 사용

**정의**

```java
enum Direction {EAST, SOUTH, WEST, NORTH} // 열거형 이름 {상수명1, 상수명2, ... }
```

**사용**

```java
class Unit {
	init x, y;
    Direction dir; // 열거형을 인스턴스 변수로 선언

    void init() {
    	dir = Direction.EAST; // 유닛의 방향을 EAST로 초기화
    }
}
```

<br />

### 2-3. 열거형에 멤버 추가하기

열거형 상수가 불연속적인 경우에는 열거형 상수의 이름 옆에 원하는 값을 괄호와 함께 적고, 지정된 값을 저장할 수 있는 인스턴스 변수와 생성자를 추가해야 한다.

```java
enum Direction {
	EAST(1), SOUTH(5), WEST(-1), NORTH(10);

    private final int value; // 정수를 저장할 인스턴스 변수
    Direction(int value) {this.value = value} // 생성자 추가

    public int getValue() {return value;}
}
```

하나의 열거형 상수에 여러 값을 지정하고자 한다면, 값에 맞게 인스턴스 변수와 생성자 등을 추가로 생성해주어야 한다.
<br/>

**열거형에 추상 메서드 추가하기**
추상 메서드를 선언한 뒤, 상수명을 선언할 때 추상 메서드를 함께 정의한다.
<BR/>

### 2-4. 열거형의 이해

열거형의 상수 하나하나는 열거형 이름의 객체로 저장된다.

<BR />

## 3. 애너테이션 (annotation)

### 3-1. 애너테이션이란?

프로그램의 소스코드 안에 다른 프로그램을 위한 정보를 미리 약속된 형식으로 포함시킨 것으로, 주석처럼 코드에 영향을 미치지 않으면서도 다른 프로그램에게 유용한 정보를 제공할 수 있다.

```java
@Test // method() 메서드를 테스트 해야 한다는 것을 프로그램에게 알리는 역할
public void method() {
	...
}
```

<br />

### 3-2. 표준 애너테이션

- **@Override** : 메서드 앞에만 붙일 수 있는 애너테이션으로, 조상의 메서드를 오버라이딩한다는 것을 알려준다.
- **@Deprecated** : 더 이상 사용되지 않는 필드나 메서드에 붙여 사용하지 않을 것임을 알려준다.
- **@FunctionalInterface** : 함수형 인터페이스에 붙여 인터페이스를 올바르게 선언했는지를 확인한다.
- **@SuppressWarnings** : 컴파일러가 보여주는 경고 메세지가 나타나지 않게 억제해준다. 억제하려는 경고 메세지를 애너테이션 뒤에 괄호와 함께 문자열로 지정하여 사용한다.
  이 때, 경고 억제범위는 최소화하는 것이 좋다.
- **@SafeVarargs** : 메서드에 선언된 가변인자의 타입이 `non-reifiable` 타입일 경우 발생하는 `"unchecked"` 경고를 억제한다.
  > `non-reifialbe`<br/>
  > 타입 소거자에 의해 컴파일 타임에 타입 정보가 사라진 것
  > 주로 앞서 살펴본 제네릭스에서, 제네릭을 사용하지 않는 버전과의 호환성을 위해 제공한 타입 제거 기능 때문에 발생한다.

<br />

### 3-3. 메타 애너테이션

애너테이션을 위한 애너테이션으로, 애너테이션을 정의할 때 애너테이션의 적용대상이나 유지기간 등을 지정하는 데에 사용된다.

- **@Target** : 애너테이션이 적용가능한 대상을 지정한다.
- **@Retention** : 애너테이션이 유지되는 기간을 지정한다.
  - `SOURCE` - 소스 파일에만 존재. 클래스 파일에는 존재하지 않는다.
  - `CLASS` - 클래스 파일에만 존재. 실행시에 사용 불가하며 기본값이다.
  - `RUNTIME` - 클래스 파일에 존재. 실행시에 사용 가능하다.
- **@Documented** : 애너테이션에 대한 정보가 `javadoc`으로 작성한 문서에 포함되도록 한다.
- **@Inherited** : 애너테이션이 자손 클래스에 상속되도록 한다.
- **@Repeatable** : 해당 애너테이션이 붙은 애너테이션은 여러번 붙일 수 있다.
  - 여러 개의 애너테이션을 사용하므로, 이들을 한번에 관리할 수 있는 컨테이너 애너테이션을 작성해야 한다.
- **@Native** : 상수 필드에 붙이는 애너테이션임을 알려준다.
  <br />

### 3-4. 애너테이션 타입 정의하기

새로운 애너테이션을 정의하는 방법은 `@` 기호를 붙이는 것을 제외하면 인터페이스를 정의하는 것과 동일하다.

```java
@interface 애너테이션 이름 {
	타입 요소 이름(); // 애너테이션 요소 선언
}
```

**애너테이션의 요소**
애너테이션 내에 선언된 메서드를 의미한다. 애너테이션의 요소는 반환값이 있고, 매개변수는 없는 추상 메서드의 형태를 갖는다. 또한, 애너테이션의 각 요소는 기본값을 가질 수 있는데, `default`를 사용하여 기본값을 지정한다.

요소의 타입이 배열인 경우에는 `{}`를 사용하여 여러개의 값을 지정할 수 있는데, 기본값을 지정할 때도 마찬가지로 `{}`를 사용할 수 있다.

```java
@interface TestInfo {
	String[] testTools();

	String[] info() default {"aaa", "bbb"};
    String[] info2() default "ccc";
}

@Test(testTools = {"JUnit", "AutoTester"})
```

<h4>java.lang.annotation.Annotation</h4>
모든 애너테이션의 조상은 `Annotation`이기 때문에 모든 애너테이션 객체에 대해 `equals()`, `hashCode()`, `toString()`과 같은 메서드를 호출하는 것이 가능하다.

<h4>Marker Annotation</h4>
`Serializable`이나 `Cloneable` 인터페이스처럼 요소가 하나도 정의되지 않은 애너테이션을 <strong>마커 애너테이션</strong>이라고 한다.

<h4>애너테이션 요소의 규칙</h4>

- 요소의 타입은 기본형, String, enum, 애너테이션, Class만 허용된다.
- 매개변수를 선언할 수 없다.
- 예외를 선언할 수 없다.
- 요소를 타입 매개변수로 정의할 수 없다.

모든 클래스 파일은 `클래스 로더`에 의해 메모리에 올라갈 때, 클레스에 대한 정보가 담긴 객체를 생성한다. 이 클래스 객체에는 해당 클래스에 대한 모든 정보가 포함되어 있는데, 애너테이션의 정보도 포함된다.

클래스 객체가 갖고 있는 `getAnnotation()`이라는 메서드에 매개변수로 정보를 얻고자 하는 애너테이션을 지정할 수 있고, `getAnnotations()`로 모든 애너테이션을 배열로 받아올 수 있다.
<br />

--

#### 참고 도서

🙇🏻‍♂️ 남궁 성, 자바의 정석
